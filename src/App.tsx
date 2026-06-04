import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

// Modulating sub-components
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import ProductCatalog from './components/ProductCatalog';
import Portfolio from './components/Portfolio';
import InspirationFAQ from './components/InspirationFAQ';
import ContactSection from './components/ContactSection';
import AdminPanel from './components/AdminPanel';
import Footer from './components/Footer';

// Seed Initial Data specs
import {
  INITIAL_PRODUCTS,
  INITIAL_PROJECTS,
  INITIAL_TESTIMONIALS,
  INITIAL_BLOGS,
  INITIAL_INQUIRIES,
  INITIAL_CONSULTATIONS,
  DEFAULT_WEBSITE_CONTENT
} from './data/initialData';

import { Product, Project, Inquiry, Consultation, Testimonial, Blog, WebsiteContent } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');

  // Load and preserve state inside client-side LocalStorage to enable highly engaging administrative CRUD
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('jeet_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('jeet_projects');
    return saved ? JSON.parse(saved) : INITIAL_PROJECTS;
  });

  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const saved = localStorage.getItem('jeet_testimonials');
    return saved ? JSON.parse(saved) : INITIAL_TESTIMONIALS;
  });

  const [blogs, setBlogs] = useState<Blog[]>(() => {
    const saved = localStorage.getItem('jeet_blogs');
    return saved ? JSON.parse(saved) : INITIAL_BLOGS;
  });

  const [inquiries, setInquiries] = useState<Inquiry[]>(() => {
    const saved = localStorage.getItem('jeet_inquiries');
    return saved ? JSON.parse(saved) : INITIAL_INQUIRIES;
  });

  const [consultations, setConsultations] = useState<Consultation[]>(() => {
    const saved = localStorage.getItem('jeet_consultations');
    return saved ? JSON.parse(saved) : INITIAL_CONSULTATIONS;
  });

  const [websiteContent, setWebsiteContent] = useState<WebsiteContent>(() => {
    const saved = localStorage.getItem('jeet_cms');
    return saved ? JSON.parse(saved) : DEFAULT_WEBSITE_CONTENT;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('jeet_admin_loggedin') === 'true';
  });

  // Preserve states whenever variables are modified
  useEffect(() => {
    localStorage.setItem('jeet_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('jeet_projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem('jeet_testimonials', JSON.stringify(testimonials));
  }, [testimonials]);

  useEffect(() => {
    localStorage.setItem('jeet_blogs', JSON.stringify(blogs));
  }, [blogs]);

  useEffect(() => {
    localStorage.setItem('jeet_inquiries', JSON.stringify(inquiries));
  }, [inquiries]);

  useEffect(() => {
    localStorage.setItem('jeet_consultations', JSON.stringify(consultations));
  }, [consultations]);

  useEffect(() => {
    localStorage.setItem('jeet_cms', JSON.stringify(websiteContent));
  }, [websiteContent]);

  useEffect(() => {
    localStorage.setItem('jeet_admin_loggedin', String(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  // Automatic Top-alignment scroll on pagination adjustments
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  // Handle client-side incoming Commission inquiries
  const handleAddInquiry = (newInq: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const completeInq: Inquiry = {
      ...newInq,
      id: 'inq-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setInquiries(prev => [completeInq, ...prev]);
  };

  // Handle client-side incoming Space Consult bookings
  const handleAddConsultation = (newCon: Omit<Consultation, 'id' | 'status'>) => {
    const completeCon: Consultation = {
      ...newCon,
      id: 'con-' + Date.now(),
      status: 'pending'
    };
    setConsultations(prev => [completeCon, ...prev]);
  };

  return (
    <div className="bg-[#fdfcfb] text-[#1a1a1a] antialiased font-sans min-h-screen selection:bg-[#C5A059] selection:text-white">
      
      {/* 1. Transparent-to-Solid Glass Header navigation */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isAdminLoggedIn={isAdminLoggedIn}
        setIsAdminLoggedIn={setIsAdminLoggedIn}
        contactPhone={websiteContent.phone}
      />

      {/* 2. Scroll Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-gray-100 z-50">
        <div className="h-full bg-gradient-to-r from-[#C5A059] via-[#e5c589] to-[#C5A059] animate-pulse w-full transform origin-left transition-transform duration-3000" />
      </div>

      {/* 3. Immersive transitions wrapper */}
      <main className="relative pb-10">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {activeTab === 'home' && (
            <HomeView 
              onExploreCollection={() => setActiveTab('catalog')} 
              onBookConsultation={() => setActiveTab('contact')}
              projects={projects}
              testimonials={testimonials}
            />
          )}

          {activeTab === 'catalog' && (
            <ProductCatalog 
              products={products}
              onAddInquiry={handleAddInquiry}
            />
          )}

          {activeTab === 'portfolio' && (
            <Portfolio 
              projects={projects}
            />
          )}

          {activeTab === 'inspiration' && (
            <InspirationFAQ />
          )}

          {activeTab === 'contact' && (
            <ContactSection 
              onAddConsultation={handleAddConsultation}
              contactDetails={{
                phone: websiteContent.phone,
                email: websiteContent.email,
                address: websiteContent.address,
                whatsapp: websiteContent.whatsapp,
                hours: websiteContent.hours
              }}
            />
          )}

          {activeTab === 'admin' && (
            <AdminPanel 
              products={products}
              setProducts={setProducts}
              projects={projects}
              setProjects={setProjects}
              inquiries={inquiries}
              setInquiries={setInquiries}
              consultations={consultations}
              setConsultations={setConsultations}
              testimonials={testimonials}
              setTestimonials={setTestimonials}
              blogs={blogs}
              setBlogs={setBlogs}
              websiteContent={websiteContent}
              setWebsiteContent={setWebsiteContent}
              isAdminLoggedIn={isAdminLoggedIn}
              setIsAdminLoggedIn={setIsAdminLoggedIn}
            />
          )}
        </motion.div>
      </main>

      {/* 4. Elegant Footer coordinates block */}
      <Footer 
        setActiveTab={setActiveTab}
        contactDetails={{
          phone: websiteContent.phone,
          email: websiteContent.email,
          address: websiteContent.address,
          hours: websiteContent.hours
        }}
      />

    </div>
  );
}
