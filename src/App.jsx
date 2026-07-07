import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingButtons from './components/layout/FloatingButtons';

// Modals
import PartnerModal from './components/shared/PartnerModal';
import DestinationModal from './components/shared/DestinationModal';

// Pages
import Home from './pages/Home';
import DestinationsPage from './pages/DestinationsPage';
import PartnerProgramPage from './pages/PartnerProgramPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [initialDestinationInquiry, setInitialDestinationInquiry] = useState('');
  
  const [destinationModalOpen, setDestinationModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  const handleOpenPartnerModal = (destinationName = '') => {
    if (typeof destinationName === 'string' && destinationName) {
      setInitialDestinationInquiry(destinationName);
    } else {
      setInitialDestinationInquiry('');
    }
    setPartnerModalOpen(true);
  };

  const handleOpenDestinationModal = (destination) => {
    setSelectedDestination(destination);
    setDestinationModalOpen(true);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#FAFAF8] text-[#0F172A] font-inter antialiased selection:bg-[#F97316] selection:text-white relative">
          
          {/* Top Navbar */}
          <Navbar onOpenPartnerModal={handleOpenPartnerModal} />

          {/* Main Page Routes */}
          <div className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Home 
                    onOpenPartnerModal={handleOpenPartnerModal} 
                    onOpenDestinationModal={handleOpenDestinationModal} 
                  />
                } 
              />
              <Route 
                path="/destinations" 
                element={
                  <DestinationsPage 
                    onOpenDestinationModal={handleOpenDestinationModal} 
                    onOpenPartnerModal={handleOpenPartnerModal} 
                  />
                } 
              />
              <Route 
                path="/partner-program" 
                element={
                  <PartnerProgramPage 
                    onOpenPartnerModal={handleOpenPartnerModal} 
                  />
                } 
              />
              <Route 
                path="/contact" 
                element={
                  <ContactPage 
                    onOpenPartnerModal={handleOpenPartnerModal} 
                  />
                } 
              />
              {/* Fallback route */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer onOpenPartnerModal={handleOpenPartnerModal} />

          {/* Sticky Floating Action Buttons */}
          <FloatingButtons onOpenPartnerModal={handleOpenPartnerModal} />

          {/* Reusable B2B Partner Onboarding & Quick Quote Modal */}
          <PartnerModal 
            isOpen={partnerModalOpen} 
            onClose={() => setPartnerModalOpen(false)} 
            initialDestination={initialDestinationInquiry}
          />

          {/* Reusable Destination Circuit Preview Modal */}
          <DestinationModal 
            isOpen={destinationModalOpen} 
            onClose={() => setDestinationModalOpen(false)} 
            destination={selectedDestination} 
            onOpenPartnerModal={handleOpenPartnerModal}
          />

        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
