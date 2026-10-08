import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PainVsSolution from './components/PainVsSolution';
import DemoShowcase from './components/DemoShowcase';
import Pricing from './components/Pricing';
import OrderCalculator from './components/OrderCalculator';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import FloatingWhatsapp from './components/FloatingWhatsapp';

export default function App() {
  const [selectedPlanId, setSelectedPlanId] = useState('katalog');
  const [selectedCategoryId, setSelectedCategoryId] = useState('fnb');

  const handleSelectPackageFromPricing = (planId) => {
    setSelectedPlanId(planId);
  };

  const handleSelectCategoryFromDemo = (catId) => {
    setSelectedCategoryId(catId);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-600 selection:text-white">
      {/* Header & Sticky Nav */}
      <Navbar onSelectPackage={handleSelectPackageFromPricing} />

      {/* Hero Section */}
      <main>
        <Hero onStartOrder={() => setSelectedPlanId('katalog')} />

        {/* Why UMKM Needs Website (Pain vs Solution) */}
        <PainVsSolution />

        {/* Interactive Industry Template Showcase */}
        <DemoShowcase onSelectDemoCategory={handleSelectCategoryFromDemo} />

        {/* Transparent Pricing Cards */}
        <Pricing onSelectPackage={handleSelectPackageFromPricing} />

        {/* Interactive Order Calculator & WhatsApp Generator */}
        <OrderCalculator
          selectedPlanId={selectedPlanId}
          selectedCategoryId={selectedCategoryId}
          onPlanChange={setSelectedPlanId}
        />

        {/* How It Works (3 Steps Workflow) */}
        <Workflow />

        {/* Social Proof & Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <Faq />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsapp />
    </div>
  );
}
