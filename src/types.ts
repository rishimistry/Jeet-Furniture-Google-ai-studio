/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  features: string[];
  materials: string[];
  stock: number;
  isPopular: boolean;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  imageBefore: string;
  imageAfter: string;
  description: string;
  year: number;
  client: string;
  location: string;
  challenge: string;
  solution: string;
}

export interface Inquiry {
  id: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  productName: string;
  message: string;
  status: 'pending' | 'reviewed' | 'completed';
}

export interface Consultation {
  id: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  status: 'pending' | 'accepted' | 'completed';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
  company?: string;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface WebsiteContent {
  phone: string;
  email: string;
  address: string;
  whatsapp: string;
  hours: string;
  heroTitle: string;
  heroSubtitle: string;
}
