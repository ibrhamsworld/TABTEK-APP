"use client"
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, MessageCircle, ArrowRight, Check, Star, Paintbrush, Wrench, Droplets, Sparkles, ShoppingBag, Factory, Ruler, Hammer, Package, Users, Home, Image, Briefcase, Info } from 'lucide-react';

// Define types
type PageType = 'home' | 'products' | 'services' | 'gallery' | 'about' | 'contact';

interface NavigationProps {
  currentPage: PageType;
  setCurrentPage: (page: PageType) => void;
}

interface HomePageProps {
  setCurrentPage: (page: PageType) => void;
}

interface ServicesPageProps {
  setCurrentPage: (page: PageType) => void;
}

interface AboutPageProps {
  setCurrentPage: (page: PageType) => void;
}

interface FooterProps {
  setCurrentPage: (page: PageType) => void;
}

interface SocialIconsProps {
  className?: string;
}

// Social Media Icons Component
const SocialIcons = ({ className = "" }: SocialIconsProps) => {
  const socials = [
    { 
      name: 'WhatsApp', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      link: 'https://wa.me/2348100047719', 
      color: 'from-green-400 to-green-600' 
    },
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      link: 'https://instagram.com/tabtek', 
      color: 'from-pink-400 to-purple-600' 
    },
    { 
      name: 'TikTok', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      link: 'https://tiktok.com/@tabtek', 
      color: 'from-gray-800 to-gray-900' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      link: 'https://facebook.com/tabtek', 
      color: 'from-blue-500 to-blue-700' 
    },
    { 
      name: 'X', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      link: 'https://x.com/tabtek', 
      color: 'from-gray-700 to-gray-900' 
    }
  ];

  return (
    <div className={`flex space-x-3 ${className}`}>
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-gradient-to-br ${social.color} text-white w-10 h-10 rounded-full flex items-center justify-center hover:shadow-lg transform hover:scale-110 transition`}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, setCurrentPage }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', page: 'home', icon: <Home className="h-4 w-4" /> },
    { name: 'Products', page: 'products', icon: <ShoppingBag className="h-4 w-4" /> },
    { name: 'Services', page: 'services', icon: <Briefcase className="h-4 w-4" /> },
    { name: 'Gallery', page: 'gallery', icon: <Image className="h-4 w-4" /> },
    { name: 'About', page: 'about', icon: <Info className="h-4 w-4" /> },
    { name: 'Contact', page: 'contact', icon: <Mail className="h-4 w-4" /> }
  ];

  const handleNavClick = (page: PageType) => {
    setCurrentPage(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Paintbrush className="h-10 w-10 text-orange-500" />
                <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">TABTEK</span>
                <p className="text-xs text-gray-600 font-medium">Decorating & Painting</p>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page as PageType)}
                className={`flex items-center space-x-1 font-medium transition ${
                  currentPage === item.page ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition"
            >
              Get Quote
            </button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-orange-500">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-orange-100">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page as PageType)}
                className={`w-full text-left flex items-center space-x-2 font-medium py-2 ${
                  currentPage === item.page ? 'text-orange-500' : 'text-gray-700'
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-center"
            >
              Get Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// Home Page
const HomePage = ({ setCurrentPage }: HomePageProps) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-20 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                <Sparkles className="h-4 w-4 mr-2" />
                Your Complete Decorating Partner Since 1995
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">TABTEK</span>
                <br />Decorating & Painting Solutions
              </h1>
              <p className="text-xl text-gray-700">
                From premium paint production to professional tools and complete decorating services - everything you need to transform any space beautifully.
              </p>
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage('products')}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition flex items-center font-semibold"
                >
                  Shop Products
                  <ShoppingBag className="ml-2 h-5 w-5" />
                </button>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-full hover:bg-orange-50 transition font-semibold"
                >
                  Our Services
                </button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-orange-500">500+</p>
                  <p className="text-sm text-gray-600">Products Available</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-pink-500">2000+</p>
                  <p className="text-sm text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-purple-500">28+</p>
                  <p className="text-sm text-gray-600">Years Experience</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 rounded-3xl h-96 flex items-center justify-center text-white shadow-2xl transform hover:rotate-2 transition duration-300">
                <div className="text-center">
                  <div className="flex justify-center space-x-4 mb-6">
                    <Paintbrush className="h-20 w-20 opacity-90" />
                    <Wrench className="h-20 w-20 opacity-90" />
                  </div>
                  <p className="text-2xl font-bold">Complete Solutions</p>
                  <p className="text-lg opacity-90">Tools • Paints • Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">Why Choose TABTEK?</h2>
            <p className="text-xl text-gray-600">Your one-stop shop for all painting and decorating needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Factory className="h-12 w-12" />,
                title: 'Paint Production',
                description: 'Our own manufacturing facility produces high-quality paints with custom color matching capabilities.',
                color: 'from-orange-400 to-orange-600'
              },
              {
                icon: <ShoppingBag className="h-12 w-12" />,
                title: 'Complete Product Range',
                description: 'Brushes, rollers, sprayers, ladders, protective gear, and every tool you need for painting and decorating.',
                color: 'from-pink-400 to-pink-600'
              },
              {
                icon: <Paintbrush className="h-12 w-12" />,
                title: 'Professional Services',
                description: 'Expert painting and decorating services for residential, commercial, and industrial projects.',
                color: 'from-purple-400 to-purple-600'
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: 'Expert Consultation',
                description: 'Free color consultation, product recommendations, and technical support from our experienced team.',
                color: 'from-yellow-400 to-orange-500'
              }
            ].map((feature, index) => (
              <div key={index} className="group text-center p-6 rounded-2xl hover:shadow-2xl transition transform hover:-translate-y-2 bg-gradient-to-br from-white to-orange-50">
                <div className={`bg-gradient-to-br ${feature.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Browse Products', page: 'products', icon: <ShoppingBag className="h-12 w-12" />, color: 'from-orange-400 to-orange-600' },
              { title: 'Our Services', page: 'services', icon: <Briefcase className="h-12 w-12" />, color: 'from-pink-400 to-pink-600' },
              { title: 'View Gallery', page: 'gallery', icon: <Image className="h-12 w-12" />, color: 'from-purple-400 to-purple-600' }
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(item.page as PageType)}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 text-center group"
              >
                <div className={`bg-gradient-to-br ${item.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                <ArrowRight className="h-6 w-6 mx-auto mt-4 text-orange-500" />
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Products Page
const ProductsPage = () => {
  const productCategories = [
    {
      name: 'Premium Paints',
      category: 'Paint Production',
      description: 'Interior & exterior paints, emulsions, primers, specialty coatings',
      items: '150+ Products',
      icon: <Droplets className="h-8 w-8" />,
      color: 'from-blue-400 to-blue-600',
      products: ['Emulsion Paint', 'Gloss Paint', 'Matt Paint', 'Primer', 'Undercoat', 'Wood Paint']
    },
    {
      name: 'Painting Tools',
      category: 'Professional Equipment',
      description: 'Brushes, rollers, sprayers, paint trays, mixing tools',
      items: '200+ Products',
      icon: <Paintbrush className="h-8 w-8" />,
      color: 'from-orange-400 to-orange-600',
      products: ['Paint Brushes', 'Rollers', 'Paint Sprayers', 'Paint Trays', 'Mixing Sticks', 'Extension Poles']
    },
    {
      name: 'Decorating Equipment',
      category: 'Complete Range',
      description: 'Wallpaper tools, plastering equipment, texture applicators',
      items: '80+ Products',
      icon: <Wrench className="h-8 w-8" />,
      color: 'from-pink-400 to-pink-600',
      products: ['Wallpaper Tools', 'Plastering Trowels', 'Texture Rollers', 'Smoothing Tools', 'Wallpaper Paste', 'Decorative Stencils']
    },
    {
      name: 'Surface Preparation',
      category: 'Quality Foundation',
      description: 'Sanders, scrapers, fillers, tapes, protective sheets',
      items: '100+ Products',
      icon: <Ruler className="h-8 w-8" />,
      color: 'from-purple-400 to-purple-600',
      products: ['Sanders', 'Scrapers', 'Fillers', 'Masking Tape', 'Drop Cloths', 'Sandpaper']
    },
    {
      name: 'Safety & Protection',
      category: 'Work Safe',
      description: 'Masks, gloves, coveralls, goggles, drop cloths',
      items: '60+ Products',
      icon: <Package className="h-8 w-8" />,
      color: 'from-green-400 to-green-600',
      products: ['Face Masks', 'Safety Gloves', 'Coveralls', 'Safety Goggles', 'Dust Sheets', 'Respirators']
    },
    {
      name: 'Ladders & Access',
      category: 'Reach Higher',
      description: 'Step ladders, extension ladders, scaffolding, platforms',
      items: '40+ Products',
      icon: <Hammer className="h-8 w-8" />,
      color: 'from-yellow-400 to-orange-500',
      products: ['Step Ladders', 'Extension Ladders', 'Platform Ladders', 'Scaffolding', 'Work Platforms', 'Ladder Accessories']
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">Our Products</h1>
            <p className="text-xl text-gray-600">Everything for painting, decorating, and renovation</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${product.color} p-8 text-white flex justify-center`}>
                  {product.icon}
                </div>
                <div className="p-6">
                  <span className="text-sm text-orange-500 font-semibold">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <p className="font-semibold text-gray-900 mb-2">Popular Items:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.products.slice(0, 3).map((item, idx) => (
                        <span key={idx} className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-sm font-bold text-pink-500">{product.items}</span>
                    <button className="text-orange-500 hover:text-orange-600 font-semibold flex items-center">
                      View All <ArrowRight className="ml-1 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-flex items-center bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition font-semibold">
              Download Full Catalog
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Services Page
const ServicesPage = ({ setCurrentPage }: ServicesPageProps) => {
  const services = [
    {
      title: 'Paint Production & Manufacturing',
      description: 'Custom paint formulation and production with color matching services',
      features: ['Custom color matching', 'Bulk production', 'Quality testing', 'Fast turnaround', 'Trade discounts'],
      icon: <Factory className="h-16 w-16" />,
      color: 'from-orange-400 to-orange-600',
      details: 'Our state-of-the-art manufacturing facility produces premium quality paints for all applications. We offer custom color matching, bulk production for contractors, and trade discounts for businesses.'
    },
    {
      title: 'General Painting Services',
      description: 'Professional painting for residential and commercial projects',
      features: ['Interior painting', 'Exterior painting', 'Industrial coatings', 'Trained professionals', 'Quality guarantee'],
      icon: <Paintbrush className="h-16 w-16" />,
      color: 'from-pink-400 to-pink-600',
      details: 'Our team of certified painters delivers exceptional results for homes, offices, and industrial facilities. We use premium materials and guarantee customer satisfaction.'
    },
    {
      title: 'Complete Decorating Solutions',
      description: 'Full decorating services from planning to execution',
      features: ['Wallpapering', 'Texture finishes', 'Decorative effects', 'Design consultation', 'Project management'],
      icon: <Sparkles className="h-16 w-16" />,
      color: 'from-purple-400 to-purple-600',
      details: 'Transform your space with our comprehensive decorating services. From initial design consultation to final touches, we handle every aspect of your project.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">Our Services</h1>
            <p className="text-xl text-gray-600">Professional solutions for every project</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${service.color} text-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-gray-700 mb-6 text-sm">{service.details}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 rounded-full hover:shadow-lg transition font-semibold"
                >
                  Request Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Gallery Page
const GalleryPage = () => {
  const projects = [
    { title: 'Modern Office Renovation', type: 'Commercial', color: 'from-orange-400 to-orange-600', description: 'Complete office transformation with custom paint and decorative finishes' },
    { title: 'Luxury Home Interior', type: 'Residential', color: 'from-pink-400 to-pink-600', description: 'High-end residential painting with premium materials' },
    { title: 'Retail Space Makeover', type: 'Commercial', color: 'from-purple-400 to-purple-600', description: 'Brand-focused retail space with vibrant colors' },
    { title: 'Hotel Lobby Design', type: 'Hospitality', color: 'from-blue-400 to-blue-600', description: 'Elegant lobby with texture finishes and decorative elements' },
    { title: 'Apartment Complex Exterior', type: 'Residential', color: 'from-green-400 to-green-600', description: 'Weather-resistant exterior coating for lasting protection' },
    { title: 'Restaurant Interior', type: 'Hospitality', color: 'from-yellow-400 to-orange-500', description: 'Welcoming atmosphere with custom color schemes' },
    { title: 'Corporate Headquarters', type: 'Commercial', color: 'from-indigo-400 to-indigo-600', description: 'Professional office environment with modern finishes' },
    { title: 'Villa Exterior & Interior', type: 'Residential', color: 'from-rose-400 to-rose-600', description: 'Complete villa transformation inside and out' },
    { title: 'Shopping Mall Common Area', type: 'Commercial', color: 'from-teal-400 to-teal-600', description: 'Large-scale commercial project with quick turnaround' }
  ];

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">Project Gallery</h1>
            <p className="text-xl text-gray-600">See our quality work in action</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="relative group overflow-hidden rounded-2xl h-80 cursor-pointer shadow-lg hover:shadow-2xl transition">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-500`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-white text-center">
                    <Sparkles className="h-16 w-16 mb-4 opacity-80 group-hover:rotate-12 transition-transform" />
                    <p className="text-xl font-bold mb-2">{project.title}</p>
                    <span className="text-sm bg-white/20 px-4 py-1 rounded-full mb-3">{project.type}</span>
                    <p className="text-sm opacity-90">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// About Page
const AboutPage = ({ setCurrentPage }: AboutPageProps) => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">About TABTEK</h1>
            <p className="text-xl text-gray-600">Your trusted partner since 1995</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 1995, TABTEK has grown from a small paint shop to become Lagos&apos;s premier destination for painting and decorating solutions. Our journey began with a simple mission: to provide the highest quality paints and tools to professionals and homeowners alike.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we operate our own paint manufacturing facility, stock over 500 products, and employ a team of skilled professionals who share our commitment to excellence. We&apos;ve completed thousands of projects across Nigeria, earning the trust of contractors, designers, and property owners.
              </p>
              <p className="text-gray-700">
                Our success is built on three pillars: quality products, expert service, and customer satisfaction. Every product we sell and every service we provide reflects our dedication to these values.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                To empower our customers with premium painting and decorating solutions that transform spaces and exceed expectations.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <ul className="space-y-3">
                {[
                  'Quality First - We never compromise on product or service quality',
                  'Customer Focus - Your satisfaction is our top priority',
                  'Innovation - We embrace new technologies and techniques',
                  'Integrity - Honest advice and transparent pricing always',
                  'Expertise - Continuous training for our team members',
                  'Sustainability - Eco-friendly products and practices'
                ].map((value, idx) => (
                  <li key={idx} className="flex items-start text-gray-700">
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-400 to-pink-500 text-white p-12 rounded-2xl shadow-2xl text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose TABTEK?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <p className="text-5xl font-bold mb-2">28+</p>
                <p className="text-lg">Years Experience</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">2000+</p>
                <p className="text-lg">Happy Customers</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">500+</p>
                <p className="text-lg">Products Available</p>
              </div>
              <div>
                <p className="text-5xl font-bold mb-2">100%</p>
                <p className="text-lg">Quality Guaranteed</p>
              </div>
            </div>
            <button
              onClick={() => setCurrentPage('contact')}
              className="mt-8 bg-white text-orange-500 px-8 py-4 rounded-full hover:shadow-2xl transform hover:scale-105 transition font-semibold"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Contact Page
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Thank you for your interest! We will contact you shortly.');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2348100047719?text=Hello%20TABTEK!%20I%20would%20like%20to%20inquire%20about%20your%20services.', '_blank');
  };

  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-600">Let&apos;s discuss your painting and decorating needs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
                  <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-3 rounded-lg mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Our Location</p>
                    <p className="text-gray-600">Shop 136, Jubril, Alade Drive, off Yussuf, Alagbado<br />Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
                  <div className="bg-gradient-to-br from-pink-400 to-pink-600 text-white p-3 rounded-lg mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>  
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">+234 (0) 810 004 7719<br />+234 (0) 8103650724</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-md">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 text-white p-3 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">tabtekdecor001@.com</p>
                  </div>
                </div>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white p-4 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition mb-6 flex items-center justify-center font-semibold text-lg"
              >
                <MessageCircle className="h-6 w-6 mr-3" />
                Chat with us on WhatsApp
              </button>

              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <p className="font-semibold text-gray-900 mb-4">Business Hours</p>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              
              <div>
                <p className="font-semibold text-gray-900 mb-4">Follow Us</p>
                <SocialIcons />
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                    placeholder="+234 (0) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Interest</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                  >
                    <option value="">Select a service</option>
                    <option value="paint-production">Paint Production</option>
                    <option value="painting-services">Painting Services</option>
                    <option value="decorating">Decorating Services</option>
                    <option value="tools">Tools & Equipment</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}  // Changed from rows="4" to rows={4} to fix TypeScript error
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-lg hover:shadow-2xl transform hover:scale-105 transition font-semibold text-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Footer Component
const Footer = ({ setCurrentPage }: FooterProps) => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 cursor-pointer" onClick={() => setCurrentPage('home')}>
              <div className="relative">
                <Paintbrush className="h-10 w-10 text-orange-400" />
                <Sparkles className="h-5 w-5 text-yellow-400 absolute -top-1 -right-1" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">TABTEK</span>
                <p className="text-xs text-gray-400">Decorating & Painting</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Your complete partner for paints, tools, and professional decorating services.
            </p>
            <SocialIcons />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-orange-400">Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Paints & Coatings</button></li>
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Painting Tools</button></li>
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Decorating Equipment</button></li>
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Accessories</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-pink-400">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition">Paint Production</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition">General Painting</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-white transition">Decorating Services</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">Consultation</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-400">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-white transition">About Us</button></li>
              <li><button onClick={() => setCurrentPage('gallery')} className="hover:text-white transition">Gallery</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">Careers</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-white transition">Contact</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">&copy; 2025 TABTEK Decorating & Painting. All rights reserved.</p>
          <p className="text-sm text-gray-500 mt-2">Quality paints, professional tools, expert services - all under one roof</p>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'products':
        return <ProductsPage />;
      case 'services':
        return <ServicesPage setCurrentPage={setCurrentPage} />;
      case 'gallery':
        return <GalleryPage />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}