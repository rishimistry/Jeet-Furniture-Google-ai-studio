import { Product, Project, Testimonial, Blog, WebsiteContent, Inquiry, Consultation } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Verona Velvet Cloud Sofa',
    category: 'Living Room Furniture',
    price: 3450,
    rating: 4.9,
    description: 'Immerse yourself in sheer comfort. Featuring double-layered high-density memory foam support wrapped in luxury cream-colored velvet, flanked by premium solid American walnut accents.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800',
    features: ['Plush velvet material', 'Hand-sanded walnut base', 'High-density memory foam', 'Includes 4 matching accent pillows'],
    materials: ['Walnut Wood', 'Velvet', 'Carbon steel coil springs'],
    stock: 8,
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Aurelia Brass Credenza',
    category: 'Living Room Furniture',
    price: 2890,
    rating: 4.8,
    description: 'A striking statement piece designed to elevate. Handcrafted from wire-brushed white oak panels and elevated by solid burnished gold-plated handles and custom brass inlaid trim legs.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800',
    features: ['Intricate brass geometric inlay', 'Soft-close hidden cabinet doors', 'Adjustable glass interior shelving', 'Solid brass custom base'],
    materials: ['White Oak', 'Tempered Glass', 'Burnished Brass'],
    stock: 5,
    isPopular: true
  },
  {
    id: 'p3',
    name: 'Nocturne Walnut Floating Bed Frame',
    category: 'Bedroom Furniture',
    price: 4200,
    rating: 4.9,
    description: 'Reclaim your sleep in ultimate design luxury. This bed features a signature floating design aesthetic under-lit with ambient LED-warm strips, backed by structured custom headboard panels.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800',
    features: ['Floating under-bed structural support', 'Built-in wireless phone chargers on bed side rails', 'Warm ambient LED light kit included', 'Heavy timber durability'],
    materials: ['American Black Walnut', 'Full-grain Leather paneling', 'Smart-control LEDs'],
    stock: 4,
    isPopular: true
  },
  {
    id: 'p4',
    name: 'Augusta Travertine Dining Table',
    category: 'Dining Furniture',
    price: 5100,
    rating: 5.0,
    description: 'Sculptural masterpiece for luxurious dining. Features a magnificent honed Italian travertine top resting elegantly on twin fluted solid oak architectural pedestal columns.',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800',
    features: ['Natural honed Italian marble sealant', 'Fluted oak structural pillars', 'Comfortably seats 8-10 guests', 'Stain-resistant protective coating'],
    materials: ['Premium Travertine', 'Solid Red Oak', 'Internal steel bracing'],
    stock: 3,
    isPopular: true
  },
  {
    id: 'p5',
    name: 'Santi Walnut Minimalist Desk',
    category: 'Office Furniture',
    price: 2150,
    rating: 4.7,
    description: 'An executive sanctuary of focus. Features a beautiful premium work desk structured with solid premium teak and dark textured leather workspaces with built-in cable management.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800',
    features: ['Invisible magnetic cable routing path', 'Micro-suede lined storage drawers', 'Top panel soft textured workspace protection', 'Ergonomic curves'],
    materials: ['Premium Teak', 'Fine-grain Cowhide Leather', 'Anodized Aluminum'],
    stock: 12,
    isPopular: false
  },
  {
    id: 'p6',
    name: 'Elite Linear Matte Modular Kitchen',
    category: 'Modular Kitchens',
    price: 18500,
    rating: 5.0,
    description: 'The pinnacle of luxury culinary spaces. Features beautiful architectural slate matte anti-fingerprint cabinetry, smart motorized pullout spice racks, and stunning ambient accent lighting.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    features: ['Quartz countertop seamless waterfall design', 'Hand-welded internal organizer grids', 'Soft-touch automatic mechanical opening', 'Custom concealed appliance ports'],
    materials: ['High-pressure laminates', 'Calacatta Quartz', 'Premium stainless fixtures'],
    stock: 2,
    isPopular: true
  },
  {
    id: 'p7',
    name: 'Lumiere Backlit Built-in Wardrobe',
    category: 'Wardrobes',
    price: 8900,
    rating: 4.8,
    description: 'An exquisite boutique dressing experience. This custom floor-to-ceiling wardrobe features beautiful tinted bronze glass sliding doors and motion-sensor luxury vertical illumination strips.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
    features: ['Motion-sensor interior strip bars', 'Bronze velvet lined tray shelves', 'Silent motorized sliding rail assemblies', 'Built-in humidity equalizer'],
    materials: ['Anodized aluminum framing', 'Bronze Tempered Glass', 'Microfiber leather lining'],
    stock: 3,
    isPopular: false
  },
  {
    id: 'p8',
    name: 'Heritage Teak Bespoke Accent Chair',
    category: 'Custom Furniture',
    price: 1450,
    rating: 4.9,
    description: 'Individually serialized. Featuring custom steam-curved heritage teak struts weaving into a comfortable premium boucle seat cushion that feels wonderfully warm and organic.',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=800',
    features: ['Unique hand-numbered brass labelplate', 'Steam-bent premium teak frame construct', 'Premium white textured boucle comfort upholstery', 'Anti-scuff solid brass foot caps'],
    materials: ['Bespoke Teak Wood', 'Organic Boucle Weave', 'Polished Brass'],
    stock: 6,
    isPopular: true
  }
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'pr1',
    name: 'The Obsidian Penthouse',
    category: 'Luxury Residence',
    imageBefore: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    description: 'Transforming a blank, concrete high-rise into a warm, charcoal-themed luxury penthouse. We designed custom black-walnut acoustic slatted wood paneling, suspended floating marble shelves, and installed bespoke low-profile furniture.',
    year: 2025,
    client: 'Aditya & Kiara Roy',
    location: 'Bandra-Kurla Complex, Mumbai',
    challenge: 'The penthouse suffered from cold concrete echoing, bad natural lighting diffusion, and structural awkward pillars in the center of the living area.',
    solution: 'We introduced custom-curved oak partition frames that act as storage screens, sound-absorbing premium wood wall-coverings, and dynamic under-cabinet recessed track lights to make the space warm and acoustically peaceful.'
  },
  {
    id: 'pr2',
    name: 'The Oakland Culinary Haven',
    category: 'Modern Kitchens',
    imageBefore: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
    description: 'Complete overhaul of a 1990s kitchen. We built a stunning bespoke modular kitchen with ultra-modern charcoal matte cabinets, integrated appliances, and a beautiful double-waterfall quartz prep island.',
    year: 2024,
    client: 'Dr. Devendar Patel',
    location: 'Jubilee Hills, Hyderabad',
    challenge: 'Limited spatial efficiency other than bulky wall-mounted standard cabinets, cramped workflows, and severe lack of hidden trash or pantry integrations.',
    solution: 'Engineered a highly space-efficient custom layout utilizing pullout pocket systems, touch-to-open corner setups, custom storage towers, and a full Caesarstone countertop.'
  },
  {
    id: 'pr3',
    name: 'Minimalist Zen Bedroom Escape',
    category: 'Elite Interiors',
    imageBefore: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800',
    imageAfter: 'https://images.unsplash.com/photo-1505693395321-883724634266?auto=format&fit=crop&q=80&w=800',
    description: 'A masterpiece in understated elegance. Creating an ultra-cozy workspace plus sleep oasis featuring hand-carved cherry wood background screens and an integrated floating platform bed system.',
    year: 2025,
    client: 'The Mehta Family',
    location: 'Koregaon Park, Pune',
    challenge: 'The master suite felt disjointed, incorporating cheap temporary plastic wardrobes and a standard bed with messy wiring underneath exposing tech clutter.',
    solution: 'Designed and installed a custom floor-to-ceiling sleek dark timber cladding matrix that elegantly conceals split air conditioning wiring, structural support beams, and built-in vanity charging drawers.'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aishwarya Sen',
    role: 'Principal Interior Architect',
    company: 'Sen Deco Studio',
    rating: 5,
    comment: 'The craftsmanship of Jeet Furniture is unmatched in the industry. As an architect, I hold extremely strict detail tolerances. Jeet Furniture delivered custom walnut cladding and bespoke sofas that exceeded our blueprint standards. Truly world-class quality.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't2',
    name: 'Rajinder Singhania',
    role: 'Founder',
    company: 'Singhania Group Holdings',
    rating: 5,
    comment: 'For our primary executive offices, we needed heavy, stunning furniture that exuded confidence and heritage. Jeet designed dual 12-foot teak conference tables paired with leather panel credenzas. A stunning addition that makes every meeting special.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 't3',
    name: 'Meera Deshmukh',
    role: 'Homeowner',
    company: 'Indore Residency',
    rating: 5,
    comment: 'Getting a custom kitchen engineered from modular boards is scary. But Jeet staff made the process completely painless. They did everything—from initial 3D planning files to professional installation without making a mess. Clean, precise, and breathtaking.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150'
  }
];

export const INITIAL_BLOGS: Blog[] = [
  {
    id: 'b1',
    title: 'The Art of Mixing Warm Walnut and Burnished Brass',
    category: 'Design Trends',
    date: 'May 28, 2026',
    readTime: '6 min read',
    excerpt: 'Explore how deep walnut timber patterns contrast beautifully with minimal gold trims to create ultimate comfort in modern spaces.',
    content: 'The interplay between natural organic textures and structured metal is a cornerstone of modern luxury interior design. Walnut, known for its dense grain and earthy charcoal undertone, grounds a room. By introducing strategic touches of burnished brass—via thin geometric wall inlays, custom handle plates, or slim table legs—you create a light-catching accent that catches natural evening golden light. To properly execute this balance, prioritize simple lines over busy shapes, and ensure the brass has a hand-rubbed satin or brushed finish to avoid the cheap appearance of high-gloss chrome.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800',
    author: 'Samair Jeet, Founder'
  },
  {
    id: 'b2',
    title: 'Designing Modular Kitchens for Spatial Flow',
    category: 'Space Planning',
    date: 'April 14, 2026',
    readTime: '8 min read',
    excerpt: 'An in-depth manual on layout golden triangles, soft-touch pullout systems, and custom drawers that streamline your lifestyle.',
    content: 'A kitchen should be as comfortable to navigate as it is beautiful to look at. The kitchen work triangle—connecting the preparation range, sink, and refrigerator—remains the baseline structure. However, in modern luxury design, we take this further with zonal workflows. By integrating silent motorized vertical cabinets, heavy load-bearing corner carousels, and warm under-shelf sensor lighting, the culinary space transforms from a work room into a theater of hospitality. Optimize your storage with concealed deep-pan soft-close drawers and solid oak organization grids.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
    author: 'Vikram Joshi, Lead Designer'
  },
  {
    id: 'b3',
    title: 'Master Wardrobe Engineering: Boutique Living',
    category: 'Bespoke Engineering',
    date: 'March 05, 2026',
    readTime: '5 min read',
    excerpt: 'Custom glass inserts, illuminated hanger bars, and moisture management systems designed to preserve your luxury apparel.',
    content: 'A high-end wardrobe is not simple shelving; it is a personalized boutique gallery. The modern luxury wardrobe relies on aluminum structural support matrices combined with premium leather-lined details. Bronze-tinted safety glass doors protect items from direct UV exposure while providing a subtle, rich preview of your collection. Coupled with integrated silent motion trackers that illuminate individual garment rails upon opening, and custom velvet drawers for watches and jewelry, every morning routine is elevated into a refined luxury experience.',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=800',
    author: 'Ravi Mistry, Manufacturing Head'
  }
];

export const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: 'inq-1',
    date: '2026-06-03',
    name: 'Aman Verma',
    email: 'aman.verma@yahoo.com',
    phone: '+91 98765 43210',
    productName: 'Verona Velvet Cloud Sofa',
    message: 'Can I get this custom-ordered in an emerald green colored velvet upholstery rather than cream? Please email me the fabric samples.',
    status: 'pending'
  },
  {
    id: 'inq-2',
    date: '2026-06-01',
    name: 'Srishti Rai',
    email: 'srishti.design@gmail.com',
    phone: '+91 99118 84422',
    productName: 'Augusta Travertine Dining Table',
    message: 'Can you deliver this travertine table to our villa site in Goa? We need it by the end of July.',
    status: 'reviewed'
  }
];

export const INITIAL_CONSULTATIONS: Consultation[] = [
  {
    id: 'con-1',
    date: '2026-06-10',
    time: '14:30',
    name: 'Karan Johar',
    email: 'karan@dharma.in',
    phone: '+91 91234 56789',
    serviceType: 'Home Interiors',
    message: 'Complete layout remodeling for an upcoming penthouse workspace and lounge area. Looking for wood cladding and luxurious sofas.',
    status: 'pending'
  },
  {
    id: 'con-2',
    date: '2026-06-12',
    time: '11:00',
    name: 'Nisha Singhania',
    email: 'nisha@singhaniagroup.com',
    phone: '+91 98123 45678',
    serviceType: 'Custom Furniture',
    message: 'Interested in a set of bespoke dining chairs and custom credenzas to match an existing rosewood table in our mansion room.',
    status: 'accepted'
  }
];

export const DEFAULT_WEBSITE_CONTENT: WebsiteContent = {
  phone: '+91 98200 45678',
  email: 'concierge@jeetfurniture.com',
  address: 'Jeet House, Industrial Hub, Off Link Road, Andheri West, Mumbai, MH - 400053',
  whatsapp: '+919820045678',
  hours: 'Mon - Sat: 10:00 AM - 7:30 PM | Sunday: By Appointment',
  heroTitle: 'Crafting Timeless Furniture for Modern Living',
  heroSubtitle: 'Hand-sculpted premium timber, luxury metal elements, and bespoke design engineering fused to create stunning architectural statements for your home.'
};

export const INITIAL_FAQS = [
  {
    question: 'Do you offer fully custom-made sizing and materials?',
    answer: 'Absolutely. Over 60% of our production consists of completely custom timber, sizes, steel finishes, and leather selections. Our design consultants will map your custom requirements in 3D CAD files before manufacturing begins.'
  },
  {
    question: 'Where is your wood sourced and is it sustainable?',
    answer: 'We source premium plantation hardwoods including American Black Walnut, seasoned Indian Teak, and sustainably harvested White Oak. Every tree harvested complies with national environmental protection standards.'
  },
  {
    question: 'What is your typical lead time for custom modular kitchens?',
    answer: 'Modular kitchens, wardrobes, and complex bespoke sets typically require 4 to 6 weeks from site measurement and blueprint approval. Individual standard catalog items can sometimes be delivered within 7 to 10 business days.'
  },
  {
    question: 'Do you provide professional on-site installation and delivery?',
    answer: 'Yes, we provide end-to-end premium handling. Our specialized in-house delivery crew and expert engineers deliver, assemble, clean, and finalize the layout at your premises to ensure zero stress.'
  },
  {
    question: 'Do your furniture items carry a structural warranty?',
    answer: 'Yes. All Jeet Furniture custom solid timber frames, heavy-duty modular hardware sliders, and internal structural steel components carry a comprehensive 5-Year Structural Warranty.'
  }
];

export const DESIGN_INSPIRATIONS = [
  {
    id: 'insp-1',
    title: 'Earth & Iron Living Room',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
    tag: 'Warm Brutalism'
  },
  {
    id: 'insp-2',
    title: 'Midnight Marble Prep Station',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=400',
    tag: 'Modern Kitchen'
  },
  {
    id: 'insp-3',
    title: 'Bronze Glass Boutique Walk-in',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=400',
    tag: 'Wardrobe Details'
  },
  {
    id: 'insp-4',
    title: 'Executive Walnut Office Suite',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400',
    tag: 'Sleek Workspaces'
  },
  {
    id: 'insp-5',
    title: 'Linear Zen Bed Panel Cladding',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=400',
    tag: 'Bedroom Retreat'
  },
  {
    id: 'insp-6',
    title: 'Fluted Pedestal Travertine Setup',
    image: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=400',
    tag: 'Minimalist Dining'
  }
];
