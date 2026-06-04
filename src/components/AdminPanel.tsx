import React, { useState } from 'react';
import { 
  BarChart3, Sofa, Briefcase, Calendar, MessageSquare, 
  Settings, Plus, Trash2, Edit2, Check, User, Inbox, 
  MapPin, Clock, DollarSign, Activity, FileText, X, 
  Sparkles, CheckSquare, RefreshCw 
} from 'lucide-react';
import { Product, Project, Inquiry, Consultation, Testimonial, Blog, WebsiteContent } from '../types';

interface AdminPanelProps {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  projects: Project[];
  setProjects: React.Dispatch<React.SetStateAction<Project[]>>;
  inquiries: Inquiry[];
  setInquiries: React.Dispatch<React.SetStateAction<Inquiry[]>>;
  consultations: Consultation[];
  setConsultations: React.Dispatch<React.SetStateAction<Consultation[]>>;
  testimonials: Testimonial[];
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>;
  blogs: Blog[];
  setBlogs: React.Dispatch<React.SetStateAction<Blog[]>>;
  websiteContent: WebsiteContent;
  setWebsiteContent: (content: WebsiteContent) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (loggedIn: boolean) => void;
}

type AdminTab = 'analytics' | 'products' | 'projects' | 'leads' | 'testimonials' | 'blogs' | 'cms';

export default function AdminPanel({
  products, setProducts,
  projects, setProjects,
  inquiries, setInquiries,
  consultations, setConsultations,
  testimonials, setTestimonials,
  blogs, setBlogs,
  websiteContent, setWebsiteContent,
  isAdminLoggedIn, setIsAdminLoggedIn
}: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState<AdminTab>('analytics');
  const [adminPassword, setAdminPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Editing modal states (simplified overlay Forms)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);

  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isAddingProject, setIsAddingProject] = useState(false);

  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [isAddingTestimonial, setIsAddingTestimonial] = useState(false);

  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isAddingBlog, setIsAddingBlog] = useState(false);

  // New Category creator state
  const [newCategoryName, setNewCategoryName] = useState('');

  // Handle Login authentication (Hardcoded 'admin' or 'jeetadmin' for demo test)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword.toLowerCase() === 'admin' || adminPassword.toLowerCase() === 'jeetadmin') {
      setIsAdminLoggedIn(true);
      setPasswordError('');
    } else {
      setPasswordError('Invalid credentials. Hint: Enter "admin"');
    }
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setAdminPassword('');
  };

  // ----- PRODUCT CRUD HELPERS -----
  const [prodForm, setProdForm] = useState<Partial<Product>>({
    name: '', category: 'Living Room Furniture', price: 1500, rating: 4.8,
    description: '', image: '', features: [], materials: [], stock: 5, isPopular: false
  });

  const triggerAddProduct = () => {
    setProdForm({
      name: '', category: 'Living Room Furniture', price: 1500, rating: 4.8,
      description: 'Luxury design item seasoned with custom timber styling.',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
      features: ['Sleek custom joint matrices', 'Premium walnut components', '5-Year heavy warranty structure'],
      materials: ['Seasoned Oak Wood', 'Top-grain leather accents', 'Internal steel reinforcement'],
      stock: 5, isPopular: false
    });
    setIsAddingProduct(true);
  };

  const saveNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    const newProd: Product = {
      id: 'p-' + Date.now(),
      name: prodForm.name || 'Untitled bespoke creation',
      category: prodForm.category || 'Living Room Furniture',
      price: Number(prodForm.price) || 1000,
      rating: Number(prodForm.rating) || 4.5,
      description: prodForm.description || '',
      image: prodForm.image || 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
      features: prodForm.features || [],
      materials: prodForm.materials || [],
      stock: Number(prodForm.stock) || 3,
      isPopular: prodForm.isPopular || false
    };

    setProducts(prev => [newProd, ...prev]);
    setIsAddingProduct(false);
  };

  const startEditProduct = (prod: Product) => {
    setEditingProduct(prod);
    setProdForm(prod);
  };

  const saveEditedProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;

    setProducts(prev => prev.map(p => p.id === editingProduct.id ? { 
      ...p,
      name: prodForm.name || p.name,
      category: prodForm.category || p.category,
      price: Number(prodForm.price) || p.price,
      rating: Number(prodForm.rating) || p.rating,
      description: prodForm.description || p.description,
      image: prodForm.image || p.image,
      stock: Number(prodForm.stock) || p.stock,
      isPopular: prodForm.isPopular !== undefined ? prodForm.isPopular : p.isPopular
    } : p));

    setEditingProduct(null);
  };

  const deleteProduct = (id: string) => {
    if (confirm('Verify: Permanently delete this catalog masterpiece item?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };


  // ----- PROJECT GALLERY CRUD HELPERS -----
  const [projForm, setProjForm] = useState<Partial<Project>>({
    name: '', category: 'Luxury Residence', imageBefore: '', imageAfter: '',
    description: '', year: 2026, client: '', location: '', challenge: '', solution: ''
  });

  const triggerAddProject = () => {
    setProjForm({
      name: '', category: 'Luxury Residence', 
      imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
      imageAfter: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      description: 'Custom total room transformation with handsculpted panel claddings.',
      year: 2026, client: 'Aman Roy', location: 'Worli Coastway, Mumbai',
      challenge: 'Awkward load bearing wall constructs displaying clutter.',
      solution: 'Crafted floating timber partitions integrated with subtle gold strip lighting.'
    });
    setIsAddingProject(true);
  };

  const saveNewProject = (e: React.FormEvent) => {
    e.preventDefault();
    const newProj: Project = {
      id: 'pr-' + Date.now(),
      name: projForm.name || 'Untitled Case Study',
      category: projForm.category || 'Luxury Residence',
      imageBefore: projForm.imageBefore || '',
      imageAfter: projForm.imageAfter || '',
      description: projForm.description || '',
      year: Number(projForm.year) || 2026,
      client: projForm.client || 'Distinguished Patron',
      location: projForm.location || 'Bespoke Area',
      challenge: projForm.challenge || '',
      solution: projForm.solution || ''
    };

    setProjects(prev => [newProj, ...prev]);
    setIsAddingProject(false);
  };

  const startEditProject = (proj: Project) => {
    setEditingProject(proj);
    setProjForm(proj);
  };

  const saveEditedProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProject) return;

    setProjects(prev => prev.map(p => p.id === editingProject.id ? {
      ...p,
      name: projForm.name || p.name,
      category: projForm.category || p.category,
      imageBefore: projForm.imageBefore || p.imageBefore,
      imageAfter: projForm.imageAfter || p.imageAfter,
      description: projForm.description || p.description,
      year: Number(projForm.year) || p.year,
      client: projForm.client || p.client,
      location: projForm.location || p.location,
      challenge: projForm.challenge || p.challenge,
      solution: projForm.solution || p.solution
    } : p));

    setEditingProject(null);
  };

  const deleteProject = (id: string) => {
    if (confirm('Verify: Permanently purge this transformation case study?')) {
      setProjects(prev => prev.filter(p => p.id !== id));
    }
  };


  // ----- LEADS (INQUIRIES & BOOKINGS) ACTIONS -----
  const toggleInquiryStatus = (id: string) => {
    setInquiries(prev => prev.map(inq => {
      if (inq.id === id) {
        const nextStatus: Inquiry['status'] = inq.status === 'pending' ? 'reviewed' : inq.status === 'reviewed' ? 'completed' : 'pending';
        return { ...inq, status: nextStatus };
      }
      return inq;
    }));
  };

  const deleteInquiry = (id: string) => {
    if (confirm('Delete this inquiry ticket?')) {
      setInquiries(prev => prev.filter(inq => inq.id !== id));
    }
  };

  const toggleBookingStatus = (id: string) => {
    setConsultations(prev => prev.map(con => {
      if (con.id === id) {
        const nextStatus: Consultation['status'] = con.status === 'pending' ? 'accepted' : con.status === 'accepted' ? 'completed' : 'pending';
        return { ...con, status: nextStatus };
      }
      return con;
    }));
  };

  const deleteBooking = (id: string) => {
    if (confirm('Delete this consultation reservation?')) {
      setConsultations(prev => prev.filter(con => con.id !== id));
    }
  };

  // ----- CMS GENERAL MANAGEMENT -----
  const [cmsForm, setCmsForm] = useState<WebsiteContent>({ ...websiteContent });

  const saveCmsContent = (e: React.FormEvent) => {
    e.preventDefault();
    setWebsiteContent(cmsForm);
    alert('Website general variables updated successfully. Review Hero & Footer displays!');
  };


  // ----- TESTIMONIALS MANAGER -----
  const [testiForm, setTestiForm] = useState<Partial<Testimonial>>({
    name: '', role: '', comment: '', rating: 5, avatar: '', company: ''
  });

  const triggerAddTesti = () => {
    setTestiForm({
      name: '', role: 'Lead Architect', company: 'Bespoke Atelier', rating: 5,
      comment: 'Extremely content with the delivery timelines and walnut textures.',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
    });
    setIsAddingTestimonial(true);
  };

  const saveNewTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    const newTesti: Testimonial = {
      id: 't-' + Date.now(),
      name: testiForm.name || 'Client',
      role: testiForm.role || 'Design Advisor',
      company: testiForm.company || '',
      rating: Number(testiForm.rating) || 5,
      comment: testiForm.comment || '',
      avatar: testiForm.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
    };
    setTestimonials(prev => [...prev, newTesti]);
    setIsAddingTestimonial(false);
  };

  const deleteTestimonial = (id: string) => {
    if (confirm('Remove this review from scrolling lists?')) {
      setTestimonials(prev => prev.filter(t => t.id !== id));
    }
  };

  // ----- BLOGS MANAGER -----
  const [blogForm, setBlogForm] = useState<Partial<Blog>>({
    title: '', category: 'Design Trend', readTime: '5 min read', excerpt: '', content: '', image: '', author: 'Jeet Team'
  });

  const triggerAddBlog = () => {
    setBlogForm({
      title: '', category: 'Design Trend', readTime: '5 min read', excerpt: 'Deep dive into organic furniture styling rules.',
      content: 'In-depth review of luxury alignments...',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      author: 'Samair Jeet, Founder'
    });
    setIsAddingBlog(true);
  };

  const saveNewBlog = (e: React.FormEvent) => {
    e.preventDefault();
    const newBlog: Blog = {
      id: 'b-' + Date.now(),
      title: blogForm.title || 'Inspirations Volume ' + Date.now(),
      category: blogForm.category || 'Design Trends',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: blogForm.readTime || '5 min read',
      excerpt: blogForm.excerpt || '',
      content: blogForm.content || '',
      image: blogForm.image || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
      author: blogForm.author || 'Jeet Team'
    };
    setBlogs(prev => [newBlog, ...prev]);
    setIsAddingBlog(false);
  };

  const deleteBlog = (id: string) => {
    if (confirm('Delete this article instantly?')) {
      setBlogs(prev => prev.filter(b => b.id !== id));
    }
  };


  // Login Screen
  if (!isAdminLoggedIn) {
    return (
      <div className="bg-[#fdfcfb] min-h-screen pt-32 pb-24 px-4 flex items-center justify-center">
        <div className="bg-white border border-gray-200 w-full max-w-md rounded-xl p-8 space-y-6 shadow-xl">
          <div className="text-center space-y-1">
            <span className="bg-amber-50 border border-[#C5A059]/40 text-[#C5A059] font-mono text-[9px] uppercase tracking-[0.25em] px-3 py-1 rounded-full font-bold">
              Administrative Shield
            </span>
            <h1 className="font-serif text-3xl text-[#1a1a1a] font-light pt-3">Executive Terminal</h1>
            <p className="text-xs text-gray-500 font-light max-w-xs mx-auto">
              Access website configuration values, live commission requests, and inventory states.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-500 mb-1.5 font-bold">Administrative Password</label>
              <input 
                type="password"
                required
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Enter password..."
                className="w-full bg-gray-50 border border-gray-200 focus:border-[#C5A059] focus:bg-white rounded text-xs p-3 font-mono text-[#1a1a1a] outline-none shadow-sm transition-all"
              />
              {passwordError && (
                <span className="text-[10px] font-mono text-red-500 block pt-1.5">{passwordError}</span>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#121212] hover:bg-[#252525] text-white font-bold tracking-widest text-xs uppercase font-mono rounded transition-colors shadow-sm cursor-pointer"
            >
              Authenticate System
            </button>
          </form>

          <div className="pt-2 border-t border-gray-100 text-center">
            <span className="text-[10px] font-mono text-gray-400">
              Passkey Hint: <strong className="text-gray-600 font-mono">admin</strong>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fdfcfb] min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="admin-view-root">
      
      {/* Header bar and indicators */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-gray-200 pb-6 mb-10 space-y-4 md:space-y-0">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono text-emerald-600 uppercase font-bold">System Decrypted &bull; Live Ledger</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-light">Jeet Administration Panel</h1>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setActiveTab('cms')}
            className={`px-3 py-1.5 rounded border font-mono text-[10px] uppercase transition-colors font-bold shadow-sm cursor-pointer ${activeTab === 'cms' ? 'bg-[#C5A059] text-white border-[#C5A059]' : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
          >
            Config CMS
          </button>
          <button 
            onClick={handleLogout}
            className="px-3.5 py-1.5 bg-red-50 hover:bg-red-100 border border-red-200 text-red-700 font-mono text-[10px] uppercase rounded transition-colors font-bold cursor-pointer"
          >
            Secure Exit
          </button>
        </div>
      </div>

      {/* Grid: Navigation Sidebar (col 3) & Main Workspace (col 9) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Navigation Sidebar Panel */}
        <div className="lg:col-span-3 bg-[#0d0d0d] border border-[#212121] rounded-xl p-4 space-y-2">
          <span className="block text-[9px] font-mono tracking-widest text-[#b89467] uppercase px-3 pb-2 border-b border-[#1f1f1f] mb-3">
            Admin Navigation
          </span>

          <button
            onClick={() => setActiveTab('analytics')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'analytics' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <BarChart3 className="w-4 h-4 shrink-0" />
            <span>Executive Analytics</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'products' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <Sofa className="w-4 h-4 shrink-0" />
            <span>Products Catalog</span>
          </button>

          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'projects' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <Briefcase className="w-4 h-4 shrink-0" />
            <span>Project Galleries</span>
          </button>

          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center justify-between px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'leads' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <div className="flex items-center space-x-3">
              <Inbox className="w-4 h-4 shrink-0" />
              <span>Dispatcher & Leads</span>
            </div>
            <span className="bg-[#b89467]/20 text-[#b89467] text-[9px] px-2 py-0.5 rounded-full font-bold">
              {inquiries.filter(i => i.status === 'pending').length + consultations.filter(c => c.status === 'pending').length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'testimonials' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            <span>Testimonial Ledger</span>
          </button>

          <button
            onClick={() => setActiveTab('blogs')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'blogs' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <FileText className="w-4 h-4 shrink-0" />
            <span>Blogs Articles</span>
          </button>

          <button
            onClick={() => setActiveTab('cms')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded text-xs font-mono uppercase tracking-wider transition-all ${activeTab === 'cms' ? 'bg-[#171717] text-[#b89467] border-l-2 border-[#b89467]' : 'text-gray-400 hover:bg-[#121212] hover:text-white'}`}
          >
            <Settings className="w-4 h-4 shrink-0" />
            <span>CMS parameters</span>
          </button>

        </div>

        {/* Main Work Area Workspace: col 9 */}
        <div className="lg:col-span-9 bg-[#0d0d0d] border border-[#212121] rounded-xl p-6 sm:p-8 min-h-[60vh]">
          
          {/* TAB 1: EXECUTIVE ANALYTICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-white tracking-tight">Executive Dashboard Highlights</h3>
                <p className="text-xs text-gray-400">Review projected pipeline scope, conversion aggregates, and product popularity indexes.</p>
              </div>

              {/* KPI matrices */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                
                <div className="bg-[#121212] border border-[#212121] p-5 rounded-lg space-y-1">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Projected Revenue Scope</span>
                  <span className="font-serif text-2xl font-bold text-[#b89467] block">$78,400</span>
                  <span className="text-[9px] font-mono text-[#5cb85c] block">+14% vs preceding month</span>
                </div>

                <div className="bg-[#121212] border border-[#212121] p-5 rounded-lg space-y-1">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Active product tickets</span>
                  <span className="font-serif text-2xl font-bold text-white block">{inquiries.length} Units</span>
                  <span className="text-[9px] font-mono text-gray-400 block">{inquiries.filter(i => i.status === 'pending').length} Action scope</span>
                </div>

                <div className="bg-[#121212] border border-[#212121] p-5 rounded-lg space-y-1">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Consultation slots requested</span>
                  <span className="font-serif text-2xl font-bold text-white block">{consultations.length} Bookings</span>
                  <span className="text-[9px] font-mono text-[#5cb85c] block">{consultations.filter(c => c.status === 'accepted').length} Approved slots</span>
                </div>

                <div className="bg-[#121212] border border-[#212121] p-5 rounded-lg space-y-1">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">Est. Conversion Rate</span>
                  <span className="font-serif text-2xl font-bold text-[#b89467] block">38.4%</span>
                  <span className="text-[9px] font-mono text-gray-400 block">Exquisite lead validation</span>
                </div>

              </div>

              {/* SVG Analytics Charts (Pure custom design and highly robust) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Chart 1: Lead Density Over 6 Months */}
                <div className="bg-[#111] p-5 rounded-lg border border-[#212121] space-y-4">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400">Monthly Lead Density Scope</h4>
                  
                  {/* Grid of graphics */}
                  <div className="h-44 flex items-end justify-between px-4 pt-4 border-b border-[#212121] relative">
                    {/* SVG Chart overlay lines */}
                    <div className="absolute inset-0 px-4 flex flex-col justify-between pointer-events-none opacity-5">
                      <div className="border-t border-white w-full" />
                      <div className="border-t border-white w-full" />
                      <div className="border-t border-white w-full" />
                    </div>

                    {/* Chart Bars */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 bg-[#b89467]/30 hover:bg-[#b89467] h-20 rounded-t transition-all" title="Jan: 24 active leads" />
                      <span className="text-[9px] font-mono text-gray-500">Jan</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 bg-[#b89467]/30 hover:bg-[#b89467] h-28 rounded-t transition-all" title="Feb: 38 active leads" />
                      <span className="text-[9px] font-mono text-gray-500">Feb</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 bg-[#b89467]/30 hover:bg-[#b89467] h-36 rounded-t transition-all" title="Mar: 48 active leads" />
                      <span className="text-[9px] font-mono text-gray-500">Mar</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 bg-[#b89467]/30 hover:bg-[#b89467] h-24 rounded-t transition-all" title="Apr: 32 active leads" />
                      <span className="text-[9px] font-mono text-gray-500">Apr</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 bg-[#b89467]/30 hover:bg-[#b89467] h-40 rounded-t transition-all" title="May: 54 active leads" />
                      <span className="text-[9px] font-mono text-gray-500">May</span>
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-10 bg-[#b89467] h-[130px] rounded-t transition-all" title="Jun: 62 active leads" />
                      <span className="text-[9px] font-mono text-white">Jun</span>
                    </div>

                  </div>
                </div>

                {/* Chart 2: Hot Category requests */}
                <div className="bg-[#111] p-5 rounded-lg border border-[#212121] space-y-4">
                  <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400">Top Inquired Product Niches</h4>
                  
                  <div className="space-y-3 pt-2">
                    
                    <div>
                      <div className="flex justify-between text-[10px] font-mono mb-1 text-gray-300">
                        <span>Living Room (Verona Cloud Sofa, etc)</span>
                        <span className="text-[#b89467]">44%</span>
                      </div>
                      <div className="w-full bg-[#1b1b1b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#b89467] h-full" style={{ width: '44%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] font-mono mb-1 text-gray-300">
                        <span>Modular Kitchens (Matt Slates)</span>
                        <span className="text-[#b89467]">28%</span>
                      </div>
                      <div className="w-full bg-[#1b1b1b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#b89467] h-full" style={{ width: '28%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] font-mono mb-1 text-gray-300">
                        <span>Bedroom Sets (Nocturne bed etc)</span>
                        <span className="text-[#b89467]">18%</span>
                      </div>
                      <div className="w-full bg-[#1b1b1b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#b89467] h-full" style={{ width: '18%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[10px] font-mono mb-1 text-gray-300">
                        <span>Executive Offices & Custom Timbers</span>
                        <span className="text-[#b89467]">10%</span>
                      </div>
                      <div className="w-full bg-[#1b1b1b] h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#b89467] h-full" style={{ width: '10%' }} />
                      </div>
                    </div>

                  </div>
                </div>

              </div>

              {/* Recent activity tracking log */}
              <div className="bg-[#111] border border-[#212121] rounded-lg p-5 space-y-4">
                <h4 className="text-xs font-mono tracking-widest uppercase text-gray-400 block pb-2 border-b border-[#1c1c1c]">
                  Active Telemetry & Leads Stream (Live)
                </h4>
                <div className="space-y-3 font-mono text-[11px]">
                  {inquiries.slice(0, 3).map((inq, i) => (
                    <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#181818] last:border-0">
                      <div className="flex items-center space-x-2">
                        <span className="bg-[#241c15] text-[#b89467] px-1.5 py-0.5 rounded text-[9px]">INQ</span>
                        <span className="text-gray-300">New Product Enquiry from <strong>{inq.name}</strong> ({inq.productName})</span>
                      </div>
                      <span className="text-gray-500">{inq.date}</span>
                    </div>
                  ))}
                  {consultations.slice(0, 2).map((con, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1.5 border-b border-[#181818] last:border-0">
                      <div className="flex items-center space-x-2">
                        <span className="bg-[#121c13] text-[#5cb85c] px-1.5 py-0.5 rounded text-[9px]">BOOK</span>
                        <span className="text-gray-300">Bespoke scheduling slot request from <strong>{con.name}</strong></span>
                      </div>
                      <span className="text-gray-500">{con.date}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PRODUCTS CATALOGUE CRUD */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white">Customizable Design Pieces</h3>
                  <p className="text-xs text-gray-400">Total catalog inventory sizes: <strong className="text-white">{products.length}</strong> items logged</p>
                </div>
                
                <button
                  onClick={triggerAddProduct}
                  className="bg-[#b89467] hover:bg-[#cca574] text-black text-[10px] tracking-widest uppercase font-mono py-2.5 px-4 rounded font-bold flex items-center space-x-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Log New Design Piece</span>
                </button>
              </div>

              {/* Add Product Overlay Segment Form */}
              {isAddingProduct && (
                <form onSubmit={saveNewProduct} className="bg-[#121212] border-2 border-dashed border-[#b89467]/30 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#212121] pb-2">
                    <span className="text-xs tracking-wider uppercase font-mono text-[#b89467]">New Product Specification Form</span>
                    <button type="button" onClick={() => setIsAddingProduct(false)}><X className="w-4 h-4 text-gray-500 hover:text-white" /></button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Product Title</label>
                      <input 
                        type="text" required
                        value={prodForm.name}
                        onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Category Niche</label>
                      <select
                        value={prodForm.category}
                        onChange={(e) => setProdForm({ ...prodForm, category: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      >
                        <option value="Living Room Furniture">Living Room Furniture</option>
                        <option value="Bedroom Furniture">Bedroom Furniture</option>
                        <option value="Dining Furniture">Dining Furniture</option>
                        <option value="Office Furniture">Office Furniture</option>
                        <option value="Modular Kitchens">Modular Kitchens</option>
                        <option value="Wardrobes">Wardrobes</option>
                        <option value="Custom Furniture">Custom Furniture</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Prestige Price ($)</label>
                      <input 
                        type="number" required
                        value={prodForm.price}
                        onChange={(e) => setProdForm({ ...prodForm, price: Number(e.target.value) })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">High-Res Unsplash Image Link</label>
                    <input 
                      type="url" required
                      value={prodForm.image}
                      onChange={(e) => setProdForm({ ...prodForm, image: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Descriptive Prose Text</label>
                    <textarea 
                      rows={2}
                      value={prodForm.description}
                      onChange={(e) => setProdForm({ ...prodForm, description: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={prodForm.isPopular}
                        onChange={(e) => setProdForm({ ...prodForm, isPopular: e.target.checked })}
                        className="accent-[#b89467]"
                      />
                      <span className="text-[10px] font-mono text-gray-300 uppercase">Feature on Homepage Popular list</span>
                    </label>
                    <div>
                      <label className="text-[9px] font-mono text-gray-400 uppercase mr-2">Stock count</label>
                      <input 
                        type="number"
                        value={prodForm.stock}
                        onChange={(e) => setProdForm({ ...prodForm, stock: Number(e.target.value) })}
                        className="bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-1.5 w-16 text-center outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-4 bg-emerald-700 hover:bg-emerald-600 font-mono text-[10px] uppercase font-bold tracking-widest text-white rounded"
                  >
                    Write to Memory State
                  </button>
                </form>
              )}

              {/* Edit Product dialog */}
              {editingProduct && (
                <form onSubmit={saveEditedProduct} className="bg-[#121212] border border-[#b89467] rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#212121] pb-2">
                    <span className="text-xs tracking-wider uppercase font-mono text-[#b89467]">Edit: {editingProduct.name}</span>
                    <button type="button" onClick={() => setEditingProduct(null)}><X className="w-4 h-4 text-gray-500 hover:text-white" /></button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Product Title</label>
                      <input 
                        type="text" required
                        value={prodForm.name}
                        onChange={(e) => setProdForm({ ...prodForm, name: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Prestige Price ($)</label>
                      <input 
                        type="number" required
                        value={prodForm.price}
                        onChange={(e) => setProdForm({ ...prodForm, price: Number(e.target.value) })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Manual Rating</label>
                      <input 
                        type="number" step="0.1" required
                        value={prodForm.rating}
                        onChange={(e) => setProdForm({ ...prodForm, rating: Number(e.target.value) })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3">
                    <button type="button" onClick={() => setEditingProduct(null)} className="px-3 py-1.5 bg-gray-800 text-gray-300 text-xs font-mono rounded uppercase">Cancel</button>
                    <button type="submit" className="px-3 py-1.5 bg-[#b89467] text-black text-xs font-mono rounded uppercase font-bold">Commit Changes</button>
                  </div>
                </form>
              )}

              {/* Tabular List */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#212121] text-gray-500 font-mono uppercase text-[9px] tracking-wider">
                      <th className="py-3 px-2">Image</th>
                      <th className="py-3 px-2">Name Title</th>
                      <th className="py-3 px-2">Category Niche</th>
                      <th className="py-3 px-2">Prestige Price</th>
                      <th className="py-3 px-2">Stock left</th>
                      <th className="py-3 px-2 text-right">Modifiers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p.id} className="border-b border-[#181818] hover:bg-[#121212] transition-colors">
                        <td className="py-3 px-2">
                          <img src={p.image} className="w-10 h-10 object-cover rounded" referrerPolicy="no-referrer" />
                        </td>
                        <td className="py-3 px-2 font-serif text-sm font-medium text-white">{p.name}</td>
                        <td className="py-3 px-2 text-gray-400 font-mono text-[10px] uppercase">{p.category}</td>
                        <td className="py-3 px-2 text-[#b89467] font-semibold font-mono">${p.price.toLocaleString()}</td>
                        <td className="py-3 px-2 text-gray-400 font-mono">{p.stock} units</td>
                        <td className="py-3 px-2 text-right space-x-1 shrink-0">
                          <button
                            onClick={() => startEditProduct(p)}
                            className="bg-gray-900 border border-gray-800 hover:border-[#b89467] p-1.5 rounded text-gray-400 hover:text-[#b89467] transition-all"
                            title="Edit specifications"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteProduct(p.id)}
                            className="bg-red-950/20 hover:bg-red-950 border border-red-900/40 p-1.5 rounded text-red-400 hover:text-white transition-colors"
                            title="Purge product record"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* TAB 3: PROJECT CRUD MANAGER */}
          {activeTab === 'projects' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white">Before-After Showcases</h3>
                  <p className="text-xs text-gray-400">Total portfolio projects logged: <strong className="text-white">{projects.length}</strong> items</p>
                </div>
                
                <button
                  onClick={triggerAddProject}
                  className="bg-[#b89467] hover:bg-[#cca574] text-black text-[10px] tracking-widest uppercase font-mono py-2.5 px-4 rounded font-bold flex items-center space-x-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Log New Transformation Case</span>
                </button>
              </div>

              {/* Add Project Form segment */}
              {isAddingProject && (
                <form onSubmit={saveNewProject} className="bg-[#121212] border-2 border-dashed border-[#b89467]/30 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#212121] pb-2">
                    <span className="text-xs tracking-wider uppercase font-mono text-[#b89467]">Log Bespoke Gallery Project Case Studies</span>
                    <button type="button" onClick={() => setIsAddingProject(false)}><X className="w-4 h-4 text-gray-500 hover:text-white" /></button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Project Name / Title</label>
                      <input 
                        type="text" required
                        value={projForm.name}
                        onChange={(e) => setProjForm({ ...projForm, name: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Residence category</label>
                      <select 
                        value={projForm.category}
                        onChange={(e) => setProjForm({ ...projForm, category: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none text-white font-mono"
                      >
                        <option value="Luxury Residence">Luxury Residence</option>
                        <option value="Modern Kitchens">Modern Kitchens</option>
                        <option value="Elite Interiors">Elite Interiors</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Before image URL link</label>
                      <input 
                        type="url" required
                        value={projForm.imageBefore}
                        onChange={(e) => setProjForm({ ...projForm, imageBefore: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">After masterpiece image URL link</label>
                      <input 
                        type="url" required
                        value={projForm.imageAfter}
                        onChange={(e) => setProjForm({ ...projForm, imageAfter: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-2 px-4 bg-emerald-700 hover:bg-emerald-600 font-mono text-[10px] uppercase font-bold tracking-widest text-white rounded"
                  >
                    Commit Gallery Post
                  </button>
                </form>
              )}

              {/* Project list rendering */}
              <div className="space-y-4">
                {projects.map(proj => (
                  <div key={proj.id} className="bg-[#121212] border border-[#212121] rounded p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center space-x-4">
                      {/* Before-after small thumbs split view */}
                      <div className="flex -space-x-4 relative shrink-0">
                        <img src={proj.imageBefore} className="w-12 h-12 object-cover rounded border border-black filter brightness-50" referrerPolicy="no-referrer" />
                        <img src={proj.imageAfter} className="w-12 h-12 object-cover rounded border-2 border-[#b89467]" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-[#b89467] uppercase block">{proj.category} &bull; {proj.year}</span>
                        <h4 className="font-serif text-base text-white">{proj.name}</h4>
                        <span className="text-xs text-gray-400 italic block">{proj.location}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => deleteProject(proj.id)}
                      className="px-3.5 py-1.5 bg-red-950/20 hover:bg-red-950 border border-red-900/60 hover:border-red-600 text-red-500 text-xs font-mono uppercase tracking-widest rounded transition-colors"
                    >
                      Purge Study
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 4: LEADS LEDGER (INQUIRIES & BOOKINGS) */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              
              <div className="space-y-1">
                <h3 className="font-serif text-2xl text-white">Dispatcher & Lead Center</h3>
                <p className="text-xs text-gray-400">Review pending orders, scheduling proposals, and product sample requests.</p>
              </div>

              {/* Part 1: Product Inquiries block */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest block border-b border-[#212121] pb-2">
                  Bespoke Product commissions ({inquiries.length})
                </h4>

                {inquiries.length === 0 ? (
                  <span className="text-gray-500 font-mono text-xs italic block py-4 text-center">No active commissions registered.</span>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {inquiries.map(inq => (
                      <div key={inq.id} className="bg-[#121212] border border-[#1f1f1f] rounded p-4 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-gray-500">{inq.date}</span>
                            
                            {/* Interactive status pill */}
                            <button
                              onClick={() => toggleInquiryStatus(inq.id)}
                              className={`px-2.5 py-0.5 text-[8px] font-mono uppercase tracking-widest rounded border transition-colors ${
                                inq.status === 'pending'
                                  ? 'bg-[#3c2a1e] text-orange-400 border-orange-950 hover:bg-[#cca574] hover:text-black hover:font-bold'
                                  : inq.status === 'reviewed'
                                    ? 'bg-[#212d3c] text-blue-400 border-blue-950 hover:bg-[#cca574] hover:text-black hover:font-bold'
                                    : 'bg-[#152e18] text-[#5cb85c] border-emerald-950 hover:bg-[#cca574] hover:text-black hover:font-bold'
                              }`}
                            >
                              Status: {inq.status}
                            </button>
                          </div>

                          <h5 className="font-serif text-sm text-white font-medium">Patron: {inq.name}</h5>
                          
                          <div className="text-[11px] font-mono text-gray-400 space-y-0.5">
                            <span className="block">Niche: <strong className="text-[#b89467]">{inq.productName}</strong></span>
                            <span className="block">Phone: {inq.phone}</span>
                            <span className="block">Email: {inq.email}</span>
                          </div>

                          <p className="bg-[#1a1a1a] text-xs text-gray-300 font-light p-3 rounded italic leading-relaxed">
                            &ldquo;{inq.message}&rdquo;
                          </p>
                        </div>

                        <button 
                          onClick={() => deleteInquiry(inq.id)}
                          className="w-max p-1 bg-transparent hover:bg-red-950 rounded text-gray-600 hover:text-white transition-colors"
                          title="Archive ticket"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Part 2: Consultation Bookings block */}
              <div className="space-y-4 pt-6 top-border border-[#212121]">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest block border-b border-[#212121] pb-2">
                  Space Scoping Consultation proposals ({consultations.length})
                </h4>

                {consultations.length === 0 ? (
                  <span className="text-gray-500 font-mono text-xs italic block py-4 text-center">No active booking proposals found.</span>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {consultations.map(con => (
                      <div key={con.id} className="bg-[#121212] border border-[#1f1f1f] rounded p-4 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[9px] font-mono text-emerald-500 font-bold">{con.date} &mdash; {con.time} slot</span>
                            
                            {/* Interactive status pill */}
                            <button
                              onClick={() => toggleBookingStatus(con.id)}
                              className={`px-2.5 py-0.5 text-[8px] font-mono uppercase tracking-widest rounded border transition-colors ${
                                con.status === 'pending'
                                  ? 'bg-[#3c2a1e] text-orange-400 border-orange-950 hover:bg-[#cca574] hover:text-black hover:font-bold'
                                  : con.status === 'accepted'
                                    ? 'bg-[#152e18] text-[#5cb85c] border-[#1d4221] hover:bg-[#cca574] hover:text-black hover:font-bold'
                                    : 'bg-[#1e2f3c] text-blue-400 border-[#1a3449] hover:bg-[#cca574] hover:text-black hover:font-bold'
                              }`}
                            >
                              Status: {con.status}
                            </button>
                          </div>

                          <h5 className="font-serif text-sm text-white font-medium">Patron: {con.name}</h5>
                          
                          <div className="text-[11px] font-mono text-gray-400 space-y-0.5">
                            <span className="block">Niche: <strong className="text-[#b89467]">{con.serviceType}</strong></span>
                            <span className="block">Phone: {con.phone}</span>
                            <span className="block">Email: {con.email}</span>
                          </div>

                          <p className="bg-[#1a1a1a] text-xs text-gray-300 font-light p-3 rounded italic leading-relaxed">
                            &ldquo;{con.message}&rdquo;
                          </p>
                        </div>

                        <button 
                          onClick={() => deleteBooking(con.id)}
                          className="w-max p-1 bg-transparent hover:bg-red-950 rounded text-gray-600 hover:text-white transition-colors"
                          title="Archive ticket"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 5: TESTIMONIALS MANAGER */}
          {activeTab === 'testimonials' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white">Testimonial Ledger</h3>
                  <p className="text-xs text-gray-400">Manage customer reviews scrolling in homepage carousel</p>
                </div>
                
                <button
                  onClick={triggerAddTesti}
                  className="bg-[#b89467] hover:bg-[#cca574] text-black text-[10px] tracking-widest uppercase font-mono py-2.5 px-4 rounded font-bold flex items-center space-x-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Log New Review</span>
                </button>
              </div>

              {/* Create Testimonial segment Form */}
              {isAddingTestimonial && (
                <form onSubmit={saveNewTestimonial} className="bg-[#121212] border-2 border-dashed border-[#b89467]/30 rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1 font-semibold">Author Name</label>
                      <input 
                        type="text" required
                        value={testiForm.name}
                        onChange={(e) => setTestiForm({ ...testiForm, name: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1 font-semibold">Role / Position</label>
                      <input 
                        type="text" required
                        value={testiForm.role}
                        onChange={(e) => setTestiForm({ ...testiForm, role: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1 font-semibold">Enterprise / Location Coordinates</label>
                    <input 
                      type="text"
                      value={testiForm.company}
                      onChange={(e) => setTestiForm({ ...testiForm, company: e.target.value })}
                      placeholder="e.g. Bandra Residency"
                      className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1 font-semibold">Patron comment / prose quote</label>
                    <textarea 
                      rows={3} required
                      value={testiForm.comment}
                      onChange={(e) => setTestiForm({ ...testiForm, comment: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none resize-none"
                    />
                  </div>

                  <button type="submit" className="py-2 px-4 bg-emerald-700 hover:bg-emerald-600 font-mono text-[10px] uppercase font-bold text-white rounded">
                    Push Testimonial
                  </button>
                </form>
              )}

              <div className="space-y-4">
                {testimonials.map(t => (
                  <div key={t.id} className="bg-[#121212] border border-[#212121] rounded p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <img src={t.avatar} className="w-10 h-10 rounded-full border border-[#b89467] object-cover" referrerPolicy="no-referrer" />
                      <div>
                        <span className="font-serif text-sm font-medium text-white block">{t.name}</span>
                        <span className="text-[10px] font-mono text-gray-400">{t.role} &mdash; {t.company}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteTestimonial(t.id)} 
                      className="text-red-500 text-xs font-mono uppercase border border-red-900/60 p-2 rounded hover:bg-red-950 transition-colors"
                    >
                      Purge review
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 6: BLOGS ARTICLES PANEL */}
          {activeTab === 'blogs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-white">Articles & Sourcing Essays</h3>
                  <p className="text-xs text-gray-400">Create, review, and delete trending news inside the design world</p>
                </div>
                
                <button
                  onClick={triggerAddBlog}
                  className="bg-[#b89467] hover:bg-[#cca574] text-black text-[10px] tracking-widest uppercase font-mono py-2.5 px-4 rounded font-bold flex items-center space-x-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write New Sourcing Essay</span>
                </button>
              </div>

              {/* Add Blog form segment */}
              {isAddingBlog && (
                <form onSubmit={saveNewBlog} className="bg-[#121212] border border-[#b89467] rounded-lg p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Article Title</label>
                      <input 
                        type="text" required
                        value={blogForm.title}
                        onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Niche Category</label>
                      <input 
                        type="text" required
                        value={blogForm.category}
                        onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                        placeholder="e.g. Design Trends"
                        className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Headline Excerpt Summary</label>
                    <input 
                      type="text" required
                      value={blogForm.excerpt}
                      onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-400 mb-1">Main rich paragraphs copy</label>
                    <textarea 
                      rows={5} required
                      value={blogForm.content}
                      onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                      className="w-full bg-[#181818] text-gray-300 border border-[#2b2b2b] text-xs rounded p-2 outline-none resize-none"
                    />
                  </div>

                  <button type="submit" className="py-2 px-4 bg-emerald-700 hover:bg-emerald-600 font-mono text-[10px] uppercase font-bold text-white rounded">
                    Publish Article live
                  </button>
                </form>
              )}

              <div className="space-y-4">
                {blogs.map(b => (
                  <div key={b.id} className="bg-[#121212] border border-[#212121] rounded p-4 flex items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <img src={b.image} className="w-12 h-12 object-cover rounded" referrerPolicy="no-referrer" />
                      <div>
                        <span className="text-[9px] font-mono text-[#b89467] uppercase block">{b.category} &bull; {b.date}</span>
                        <h4 className="font-serif text-sm font-medium text-white">{b.title}</h4>
                      </div>
                    </div>
                    <button 
                      onClick={() => deleteBlog(b.id)} 
                      className="text-red-500 text-xs font-mono uppercase border border-red-900/60 p-2 rounded hover:bg-red-950 transition-all shrink-0"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 7: WEBSITE GENERAL VARIABLES CMS */}
          {activeTab === 'cms' && (
            <form onSubmit={saveCmsContent} className="space-y-6">
              
              <div className="border-b border-[#212121] pb-4">
                <h3 className="font-serif text-2xl text-white">Website CMS Variables</h3>
                <p className="text-xs text-gray-400">Edit general telephone numbers, physical addresses, and primary hero text tags without touching code.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-2">Concierge Phone Coordinates</label>
                  <input 
                    type="text" required
                    value={cmsForm.phone}
                    onChange={(e) => setCmsForm({ ...cmsForm, phone: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2b2b2b] text-xs font-mono text-gray-300 rounded p-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-2">Concierge Email Coordinate</label>
                  <input 
                    type="email" required
                    value={cmsForm.email}
                    onChange={(e) => setCmsForm({ ...cmsForm, email: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2b2b2b] text-xs font-mono text-gray-300 rounded p-3 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-2">WhatsApp Direct Trigger Number (No space/signs)</label>
                  <input 
                    type="text" required
                    value={cmsForm.whatsapp}
                    onChange={(e) => setCmsForm({ ...cmsForm, whatsapp: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2b2b2b] text-xs font-mono text-gray-300 rounded p-3 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-2">Operating Slot Hours display</label>
                  <input 
                    type="text" required
                    value={cmsForm.hours}
                    onChange={(e) => setCmsForm({ ...cmsForm, hours: e.target.value })}
                    className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-3 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-mono text-gray-400 mb-2">Headquarters Address Block</label>
                <input 
                  type="text" required
                  value={cmsForm.address}
                  onChange={(e) => setCmsForm({ ...cmsForm, address: e.target.value })}
                  className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-3 outline-none"
                />
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1c1c1c]">
                <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest block">Homepage Hero Statement</h4>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-500 mb-1">Headline Statement</label>
                    <input 
                      type="text" required
                      value={cmsForm.heroTitle}
                      onChange={(e) => setCmsForm({ ...cmsForm, heroTitle: e.target.value })}
                      className="w-full bg-[#181818] border border-[#2b2b2b] text-xs text-gray-300 rounded p-2.5 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[9px] uppercase tracking-wider font-mono text-gray-500 mb-1">Supporting Prose Subtitle text</label>
                    <textarea 
                      rows={2} required
                      value={cmsForm.heroSubtitle}
                      onChange={(e) => setCmsForm({ ...cmsForm, heroSubtitle: e.target.value })}
                      className="w-full bg-[#181818] text-gray-300 border border-[#2b2b2b] text-xs rounded p-2.5 outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-6 bg-[#b89467] hover:bg-[#cca574] text-black font-semibold text-xs uppercase font-mono rounded tracking-widest transition-colors flex items-center justify-center space-x-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Save CMS Content Variables</span>
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
