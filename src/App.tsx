/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product, PRODUCTS, COMPANY_INFO } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedSection } from './components/FeaturedSection';
import { CategorySection } from './components/CategorySection';
import { ShopCollection } from './components/ShopCollection';
import { AboutSection } from './components/AboutSection';
import { LookbookSection } from './components/LookbookSection';
import { ConversionSection } from './components/ConversionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { QuoteDrawer, QuoteItem } from './components/QuoteDrawer';
import { CatalogueModal } from './components/CatalogueModal';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'collection' | 'categories' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [isQuoteDrawerOpen, setIsQuoteDrawerOpen] = useState(false);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  // Handle adding an item to the quote list
  const handleAddToQuote = (product: Product, quantity: number = 1, notes?: string) => {
    setQuoteItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.product.id === product.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          notes: notes || updated[existingIndex].notes,
        };
        return updated;
      }
      return [...prev, { product, quantity, notes }];
    });
  };

  const handleUpdateQuoteQuantity = (productId: string, quantity: number) => {
    setQuoteItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveQuoteItem = (productId: string) => {
    setQuoteItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearQuote = () => {
    setQuoteItems([]);
  };

  const handleSelectCategoryFromHome = (category: 'all' | 'sofas' | 'recliners' | 'beds' | 'chairs-tables') => {
    setSelectedCategory(category);
    setActiveView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectProductById = (id: string) => {
    const product = PRODUCTS.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
    }
  };

  const quoteItemIds = quoteItems.map((item) => item.product.id);
  const totalQuoteItemsCount = quoteItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFA] text-[#191919]">
      {/* 3-Zone Navigation Top Bar */}
      <Header
        activeView={activeView}
        onNavigate={(view) => {
          setActiveView(view);
          if (view === 'collection') {
            setSelectedCategory('all');
          }
        }}
        quoteItemsCount={totalQuoteItemsCount}
        onOpenQuoteDrawer={() => setIsQuoteDrawerOpen(true)}
        onOpenCatalogueModal={() => setIsCatalogueModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeView === 'home' && (
          <>
            <Hero
              onExplore={() => {
                setSelectedCategory('all');
                setActiveView('collection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onRequestQuote={() => setIsQuoteDrawerOpen(true)}
              onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
              onSelectCategory={handleSelectCategoryFromHome}
              onSelectProductById={handleSelectProductById}
            />

            <FeaturedSection
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAddQuote={(p) => handleAddToQuote(p, 1)}
              onViewAll={() => {
                setActiveView('collection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              quoteItemIds={quoteItemIds}
            />

            <CategorySection
              onSelectCategory={handleSelectCategoryFromHome}
            />

            <AboutSection />

            <LookbookSection
              onSelectProductById={handleSelectProductById}
            />

            <ConversionSection
              onRequestQuote={() => setIsQuoteDrawerOpen(true)}
              onExplore={() => {
                setActiveView('collection');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </>
        )}

        {activeView === 'collection' && (
          <ShopCollection
            initialCategory={selectedCategory}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onQuickAddQuote={(p) => handleAddToQuote(p, 1)}
            quoteItemIds={quoteItemIds}
          />
        )}

        {activeView === 'categories' && (
          <div className="py-12 bg-[#FBFBFA]">
            <CategorySection
              onSelectCategory={handleSelectCategoryFromHome}
            />
          </div>
        )}

        {activeView === 'about' && (
          <div className="py-6">
            <AboutSection />
            <LookbookSection
              onSelectProductById={handleSelectProductById}
            />
          </div>
        )}

        {activeView === 'contact' && (
          <div className="py-6">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={(view) => {
          setActiveView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRequestQuote={() => setIsQuoteDrawerOpen(true)}
        onOpenCatalogue={() => setIsCatalogueModalOpen(true)}
      />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToQuote={(product, quantity, notes) => {
          handleAddToQuote(product, quantity, notes);
          setIsQuoteDrawerOpen(true);
        }}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Quote Drawer & Enquiry Form */}
      <QuoteDrawer
        isOpen={isQuoteDrawerOpen}
        onClose={() => setIsQuoteDrawerOpen(false)}
        items={quoteItems}
        onUpdateQuantity={handleUpdateQuoteQuantity}
        onRemoveItem={handleRemoveQuoteItem}
        onClearAll={handleClearQuote}
      />

      {/* Digital Catalogue Viewer Modal (36-Page index) */}
      <CatalogueModal
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
        }}
      />
    </div>
  );
}
