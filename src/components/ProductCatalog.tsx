import React, { useState } from 'react';
import { Search, Star, MessageSquare, Tag, Eye, X, CheckSquare, Sparkles, Send, AlertCircle } from 'lucide-react';
import { Product, Inquiry } from '../types';

interface ProductCatalogProps {
  products: Product[];
  onAddInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
}

const CATEGORIES = [
  'All Collections',
  'Living Room Furniture',
  'Bedroom Furniture',
  'Dining Furniture',
  'Office Furniture',
  'Modular Kitchens',
  'Wardrobes',
  'Custom Furniture'
];

export default function ProductCatalog({ products, onAddInquiry }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Inquiry form states
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryPhone, setInquiryPhone] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState(false);
  const [priceRange, setPriceRange] = useState<number>(20000); // Premium upper limit

  // Image Gallery active index for modal
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'All Collections' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPrice = product.price <= priceRange;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  // Handle inquiry submission
  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryPhone || !selectedProduct) return;

    onAddInquiry({
      name: inquiryName,
      email: inquiryEmail,
      phone: inquiryPhone,
      productName: selectedProduct.name,
      message: inquiryMessage || `Inquiry regarding the customized ${selectedProduct.name}.`
    });

    setInquirySuccess(true);
    setTimeout(() => {
      // Clear form & close product modal or keep modal open but clean success state
      setInquiryName('');
      setInquiryEmail('');
      setInquiryPhone('');
      setInquiryMessage('');
      setInquirySuccess(false);
      setSelectedProduct(null);
    }, 4500);
  };

  // Curate Related Products for the modal
  const getRelatedProducts = (currentProd: Product) => {
    return products
      .filter(p => p.category === currentProd.category && p.id !== currentProd.id)
      .slice(0, 3);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="product-view-root">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs tracking-[0.3em] font-mono text-[#b89467] uppercase block">
          ARTISANAL WORKS
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-light text-white tracking-tight leading-none">
          Our Custom <span className="italic">Catalog</span>
        </h1>
        <div className="w-16 h-[1px] bg-[#b89467] mx-auto my-4" />
        <p className="text-gray-400 text-xs sm:text-sm font-light leading-relaxed">
          Search and preview our custom furniture systems. Submit specialized material requests directly to our production engineers using individual inquiry portals.
        </p>
      </div>

      {/* Control Panel: Search & Price Filter */}
      <div className="bg-[#0d0d0d] border border-[#212121] rounded-lg p-6 mb-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input 
            type="text"
            placeholder="Search timber (walnut, oak, teak)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#171717] hover:bg-[#1a1a1a] focus:bg-[#1f1f1f] text-gray-200 text-xs rounded border border-[#2c2c2c] focus:border-[#b89467] py-3 pl-10 pr-4 font-mono transition-colors outline-none"
          />
        </div>

        {/* Categories Selector */}
        <div className="flex flex-wrap gap-2 md:col-span-1 justify-center">
          <span className="text-[10px] tracking-wide font-mono text-gray-400 mr-2 uppercase block self-center">
            Max Budget: <span className="text-[#b89467] font-semibold">${priceRange.toLocaleString()}</span>
          </span>
          <input 
            type="range"
            min="1000"
            max="25000"
            step="500"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full md:w-40 accent-[#b89467] h-1 bg-[#1a1a1a] rounded cursor-pointer"
          />
        </div>

        {/* Quick Result Counter */}
        <div className="text-right font-mono text-[10px] text-gray-400 capitalize">
          Showing <span className="text-[#b89467] font-semibold">{filteredProducts.length}</span> extraordinary systems
        </div>

      </div>

      {/* Categories Buttons layout */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {CATEGORIES.map((cat, i) => (
          <button
            key={i}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-[10px] tracking-widest font-mono uppercase rounded transition-all duration-300 ${
              (selectedCategory === cat)
                ? 'bg-[#b89467] text-black font-semibold'
                : 'bg-[#0d0d0d] text-gray-400 hover:text-white border border-[#212121] hover:border-gray-700'
            }`}
          >
            {cat.replace(' Furniture', '')}
          </button>
        ))}
      </div>

      {/* Products Grid layout */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-[#0d0d0d] rounded-lg border border-[#1f1f1f] space-y-4">
          <AlertCircle className="w-10 h-10 text-gray-600 mx-auto" />
          <h3 className="font-serif text-lg text-white font-light">No customizable pieces match your scope</h3>
          <p className="text-xs text-gray-400 max-w-sm mx-auto font-light">
            Try adjusting your search terminology, clearing your filter criteria, or increasing your budget scope.
          </p>
          <button 
            onClick={() => { setSelectedCategory('All Collections'); setSearchQuery(''); setPriceRange(25000); }}
            className="px-4 py-2 bg-[#171717] rounded border border-gray-700 text-[10px] tracking-widest uppercase font-mono text-[#b89467]"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-[#0c0c0c] border border-[#1c1c1c] rounded-lg p-4 transition-all duration-300 hover:border-[#b89467] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Popular Badge */}
                {product.isPopular && (
                  <span className="absolute top-6 left-6 z-10 bg-[#342415] border border-[#b89467]/40 text-[#b89467] font-mono text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full">
                    Artisan Popular
                  </span>
                )}

                {/* Main Product Image */}
                <div className="relative h-64 overflow-hidden rounded bg-[#171717] mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Actions Panel */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveImageIdx(0);
                      }}
                      className="bg-[#b89467] text-black p-2.5 rounded-full hover:bg-white transition-colors"
                      title="Quick Preview Specs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setActiveImageIdx(0);
                      }}
                      className="bg-[#171717] text-[#b89467] border border-[#b89467]/30 p-2.5 rounded-full hover:bg-[#b89467] hover:text-black transition-all"
                      title="Request Bespoke Quote"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Typography metadata */}
                <div className="space-y-1 mb-4">
                  <span className="text-[9px] tracking-widest font-mono text-gray-500 uppercase block">{product.category}</span>
                  <h3 className="font-serif text-base text-gray-100 font-medium group-hover:text-[#b89467] transition-colors">{product.name}</h3>
                  
                  {/* Rating block */}
                  <div className="flex items-center space-x-1 pt-1">
                    <div className="flex text-[#b89467] text-xs">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-mono ml-1 text-gray-300">{product.rating}</span>
                    </div>
                    <span className="text-[10px] text-gray-500 font-mono">&mdash; {product.stock > 0 ? `${product.stock} units left` : 'Custom build only'}</span>
                  </div>
                </div>
              </div>

              {/* Price block and quick query actions */}
              <div className="pt-4 border-t border-[#1a1a1a] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-gray-500 uppercase block">Est. Prestige Price</span>
                  <span className="font-serif text-lg font-bold text-[#b89467]">
                    ${product.price.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="px-3.5 py-1.5 bg-[#171717] hover:bg-[#b89467] text-gray-300 hover:text-black font-mono text-[9px] uppercase tracking-widest rounded border border-[#2b2b2b] hover:border-[#b89467] transition-all"
                >
                  Configure
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Dynamic Product Detail and Inquiry Form Modal overlay */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0c0c0c] border border-[#2a2a2a] w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl my-8 relative max-h-[90vh] flex flex-col">
            
            {/* Modal Exit Button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#171717] hover:bg-red-950 text-gray-400 hover:text-white transition-colors border border-[#222222]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Scroll viewport */}
            <div className="overflow-y-auto p-6 sm:p-10 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                
                {/* Visual Image Block On Left */}
                <div className="space-y-4">
                  <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden bg-[#151515]">
                    <img 
                      src={selectedProduct.image} 
                      alt={selectedProduct.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Tiny visual enhancement indicator */}
                    <span className="absolute bottom-4 left-4 bg-black/70 px-3 py-1 text-[9px] text-[#b89467] font-mono uppercase tracking-[0.2em] rounded">
                      Handcrafted Fine Oak Frame
                    </span>
                  </div>

                  {/* Materials list */}
                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest font-mono text-gray-400 uppercase block">Selected Premium Materials</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.materials.map((m, idx) => (
                        <span key={idx} className="bg-[#171717] border border-[#292929] px-3 py-1 rounded text-[10px] font-mono text-gray-300">
                          &bull; {m}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Handcrafted Features List */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] tracking-widest font-mono text-gray-400 uppercase block">Engineering Features</span>
                    <ul className="space-y-1.5 text-xs text-gray-300 font-light list-none">
                      {selectedProduct.features.map((f, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckSquare className="w-3.5 h-3.5 text-[#b89467] mt-0.5 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Specifications Copy & Lead Registration On Right */}
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] font-mono text-[#b89467] uppercase block">{selectedProduct.category}</span>
                    <h2 className="font-serif text-3xl font-medium text-white tracking-tight mt-1">{selectedProduct.name}</h2>
                    
                    <div className="flex items-center space-x-4 pt-2">
                      <div className="flex text-[#b89467] text-sm items-center">
                        <Star className="w-3.5h-3.5 fill-current mr-1" />
                        <span className="text-xs font-mono font-bold">{selectedProduct.rating} Score</span>
                      </div>
                      <span className="text-gray-500 text-xs font-mono">|</span>
                      <span className="text-xs text-[#5cb85c] font-mono">In Stock & customizable</span>
                    </div>

                    <div className="mt-4 bg-[#141414] border border-[#212121] px-5 py-3 rounded flex items-center justify-between">
                      <div>
                        <span className="text-[9px] font-mono text-gray-500 uppercase block">Premium Direct Quote Price</span>
                        <span className="font-serif text-2xl font-bold text-[#b89467]">${selectedProduct.price.toLocaleString()}</span>
                      </div>
                      <span className="text-[10px] font-mono text-gray-400 italic">Excl. local taxes & custom woods</span>
                    </div>

                    <p className="text-xs text-gray-300 font-light leading-relaxed mt-4">
                      {selectedProduct.description}
                    </p>
                  </div>

                  {/* Active Inquiry Portal */}
                  <div className="bg-[#111111] border border-[#222222] rounded-lg p-5">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xs font-mono tracking-widest text-[#b89467] uppercase flex items-center space-x-2">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Bespoke Commission Portal</span>
                      </h4>
                      <span className="text-[9px] font-mono text-gray-500">Fast 12-hr callback</span>
                    </div>

                    {inquirySuccess ? (
                      <div className="bg-[#122213] border border-[#1e3c20] text-[#5cb85c] rounded p-4 text-center space-y-2">
                        <span className="text-sm font-semibold block">Commission Request Submitted Securely!</span>
                        <p className="text-[11px] text-gray-300 font-light leading-relaxed">
                          Your bespoke project ticket has been routed to our Lead Carpenter. Our relationship specialist will contact you on WhatsApp/Phone shortly.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmitInquiry} className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[9px] uppercase tracking-wide font-mono text-gray-400 mb-1">Your Full Name</label>
                            <input 
                              type="text"
                              required
                              value={inquiryName}
                              onChange={(e) => setInquiryName(e.target.value)}
                              placeholder="e.g. Aman Roy"
                              className="w-full bg-[#161616] border border-[#2b2b2b] focus:border-[#b89467] rounded text-xs text-gray-200 p-2 font-mono outline-none"
                            />
                          </div>
                          <div>
                            <label className="block text-[9px] uppercase tracking-wide font-mono text-gray-400 mb-1">Your Phone / WA</label>
                            <input 
                              type="tel"
                              required
                              value={inquiryPhone}
                              onChange={(e) => setInquiryPhone(e.target.value)}
                              placeholder="e.g. +91 98200..."
                              className="w-full bg-[#161616] border border-[#2b2b2b] focus:border-[#b89467] rounded text-xs text-gray-200 p-2 font-mono outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-wide font-mono text-gray-400 mb-1">Email Coordinates</label>
                          <input 
                            type="email"
                            required
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            placeholder="e.g. contact@domain.om"
                            className="w-full bg-[#161616] border border-[#2b2b2b] focus:border-[#b89467] rounded text-xs text-gray-200 p-2 font-mono outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] uppercase tracking-wide font-mono text-gray-400 mb-1">Aesthetic specifications (Dimensions, space specs, custom timber choice)</label>
                          <textarea 
                            rows={3}
                            value={inquiryMessage}
                            onChange={(e) => setInquiryMessage(e.target.value)}
                            placeholder={`e.g. I need the ${selectedProduct.name} with custom size adjustments to fit a 9-foot niche backdrop.`}
                            className="w-full bg-[#161616] border border-[#2b2b2b] focus:border-[#b89467] rounded text-xs text-gray-200 p-2 font-mono outline-none resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-2.5 bg-[#b89467] hover:bg-[#cca574] text-black font-semibold tracking-widest text-[10px] uppercase font-mono rounded transition-colors flex items-center justify-center space-x-2"
                        >
                          <Send className="w-3 h-3" />
                          <span>Submit Bespoke Inquiry</span>
                        </button>
                      </form>
                    )}
                  </div>

                </div>

              </div>

              {/* Related Products Section inside Modal! */}
              <div className="pt-12 mt-12 border-t border-[#222222]">
                <h4 className="font-serif text-lg text-white mb-6">Related Design Aspirations</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {getRelatedProducts(selectedProduct).map(rp => (
                    <div 
                      key={rp.id}
                      onClick={() => {
                        setSelectedProduct(rp);
                        setActiveImageIdx(0);
                      }}
                      className="bg-[#141414] border border-[#212121] rounded p-3 cursor-pointer group hover:border-[#b89467] transition-all"
                    >
                      <div className="h-40 rounded overflow-hidden mb-3 bg-[#171717]">
                        <img 
                          src={rp.image} 
                          alt={rp.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[8px] font-mono text-gray-500 block uppercase">{rp.category}</span>
                      <h5 className="font-serif text-sm font-medium text-white group-hover:text-[#b89467] transition-colors">{rp.name}</h5>
                      <span className="text-xs text-[#b89467] font-mono block mt-1">${rp.price.toLocaleString()}</span>
                    </div>
                  ))}
                  {getRelatedProducts(selectedProduct).length === 0 && (
                    <div className="text-gray-500 text-xs font-mono italic md:col-span-3 py-4 text-center">
                      No other curated items are logged in this category.
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
}
