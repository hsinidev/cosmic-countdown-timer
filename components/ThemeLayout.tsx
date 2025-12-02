import React, { useState, ReactNode, FC } from 'react';
import { SeoArticle } from '../utils/SeoArticle';

type ModalType = 'about' | 'contact' | 'guide' | 'privacy' | 'terms' | 'dmca' | null;

interface ModalProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 backdrop-blur-sm flex justify-center items-center z-50 transition-opacity duration-300 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 pointer-events-none"></div>
        <header className="flex justify-between items-center p-6 border-b border-gray-800 z-10">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-3xl leading-none">&times;</button>
        </header>
        <main className="p-6 text-gray-300 overflow-y-auto leading-relaxed z-10 custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const handleOpenModal = (modal: ModalType) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const renderModalContent = () => {
    switch (activeModal) {
      case 'about':
        return (
          <Modal title="About Doodax" onClose={handleCloseModal}>
            <p className="mb-4">Welcome to Doodax, the home of the Cosmic Countdown Timer. This project was conceptualized and developed by <strong>HSINI MOHAMED</strong> with a singular vision: to create the most immersive, distraction-free digital environment for deep work.</p>
            <p className="mb-4">In an age of constant notifications, we provide a sanctuary of focus. Our tools are designed using the latest research in cognitive psychology to help you enter 'flow state' faster and stay there longer.</p>
            <p>We believe that productivity tools should be beautiful, simple, and respectful of your privacy.</p>
          </Modal>
        );
      case 'contact':
        return (
          <Modal title="Contact Us" onClose={handleCloseModal}>
            <p className="mb-4">We value your feedback and are here to help with any inquiries.</p>
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
              <ul className="space-y-3">
                <li className="flex items-center">
                   <span className="font-semibold w-24">Website:</span> 
                   <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">doodax.com</a>
                </li>
                <li className="flex items-center">
                   <span className="font-semibold w-24">Email:</span> 
                   <a href="mailto:hsini.web@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors">hsini.web@gmail.com</a>
                </li>
                <li className="flex items-center">
                   <span className="font-semibold w-24">Developer:</span> 
                   <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">HSINI MOHAMED</a>
                </li>
              </ul>
            </div>
          </Modal>
        );
      case 'guide':
        return (
          <Modal title="User Guide" onClose={handleCloseModal}>
            <h3 className="text-lg font-bold text-white mb-2">How to use the Timer</h3>
            <ol className="list-decimal pl-5 space-y-2 mb-6">
               <li><strong>Set Duration:</strong> Click on the hours, minutes, or seconds fields to type your desired time, or use the quick preset buttons below the timer.</li>
               <li><strong>Start Focus:</strong> Click the "Start" button. The interface will simplify, hiding inputs to reduce distractions.</li>
               <li><strong>Flow State:</strong> Work until you hear the chime. The cosmic background is designed to be looked at during brief pauses to rest your eyes without breaking concentration.</li>
            </ol>
            <h3 className="text-lg font-bold text-white mb-2">Keyboard Shortcuts</h3>
            <ul className="list-disc pl-5 space-y-2">
                <li><strong>Spacebar:</strong> Pause/Resume timer (when active).</li>
            </ul>
          </Modal>
        );
      case 'privacy':
        return (
          <Modal title="Privacy Policy" onClose={handleCloseModal}>
            <p className="mb-4"><strong>Last Updated: October 2023</strong></p>
            <p className="mb-4">At Doodax, we take your privacy seriously. This Privacy Policy explains how we handle your information.</p>
            <h4 className="font-bold text-white mt-4">1. Data Collection</h4>
            <p>We do not collect, store, or transmit any personally identifiable information (PII). This application runs entirely client-side in your web browser.</p>
            <h4 className="font-bold text-white mt-4">2. Cookies</h4>
            <p>We do not use tracking cookies or third-party analytics scripts that monitor your behavior across the web.</p>
            <h4 className="font-bold text-white mt-4">3. Local Storage</h4>
            <p>We may use your browser's Local Storage solely to save your preferred timer settings locally on your device. This data never leaves your computer.</p>
          </Modal>
        );
      case 'terms':
        return (
          <Modal title="Terms of Service" onClose={handleCloseModal}>
             <p className="mb-4">By accessing Doodax.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
             <h4 className="font-bold text-white mt-4">Use License</h4>
             <p>Permission is granted to use the Cosmic Countdown Timer for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
             <h4 className="font-bold text-white mt-4">Disclaimer</h4>
             <p>The materials on Doodax's website are provided on an 'as is' basis. Doodax makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
          </Modal>
        );
      case 'dmca':
        return (
          <Modal title="DMCA Policy" onClose={handleCloseModal}>
            <p className="mb-4">Doodax respects the intellectual property rights of others. All content, code, and assets on this website are original works or used under appropriate licenses.</p>
            <p className="mb-4">If you are a copyright owner or an agent thereof and believe that any content on this website infringes upon your copyrights, you may submit a notification pursuant to the Digital Millennium Copyright Act ("DMCA") by providing our Copyright Agent with the following information in writing:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.</li>
                <li>Identification of the copyrighted work claimed to have been infringed.</li>
                <li>Information reasonably sufficient to permit the service provider to contact you, such as an address, telephone number, and, if available, an electronic mail.</li>
            </ul>
            <p className="mt-4"><strong>Contact:</strong> <a href="mailto:hsini.web@gmail.com" className="text-purple-400">hsini.web@gmail.com</a></p>
          </Modal>
        );
      default:
        return null;
    }
  };

  const navLinks: { label: string; modal: ModalType }[] = [
    { label: 'About', modal: 'about' },
    { label: 'Guide', modal: 'guide' },
    { label: 'Contact', modal: 'contact' },
    { label: 'Privacy', modal: 'privacy' },
    { label: 'Terms', modal: 'terms' },
    { label: 'DMCA', modal: 'dmca' },
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#050510] text-white font-sans overflow-x-hidden flex flex-col font-light">
      {/* Immersive Cosmic Background */}
      <div className="fixed inset-0 z-0">
         {/* Deep Space Base */}
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#1B2735_0%,_#090A0F_100%)]"></div>
         
         {/* Nebula Clouds */}
         <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-900 rounded-full blur-[120px] opacity-20 animate-[pulse_8s_ease-in-out_infinite]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-900 rounded-full blur-[120px] opacity-20 animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
         <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-pink-900 rounded-full blur-[100px] opacity-10 animate-[pulse_15s_ease-in-out_infinite]"></div>

         {/* Stars Overlay */}
         <div 
           style={{
             backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'0.5\' fill=\'white\' opacity=\'0.8\'/%3E%3Ccircle cx=\'25\' cy=\'15\' r=\'0.3\' fill=\'white\' opacity=\'0.6\'/%3E%3Ccircle cx=\'50\' cy=\'80\' r=\'0.6\' fill=\'white\' opacity=\'0.7\'/%3E%3Ccircle cx=\'85\' cy=\'40\' r=\'0.4\' fill=\'white\' opacity=\'0.8\'/%3E%3Ccircle cx=\'10\' cy=\'60\' r=\'0.3\' fill=\'white\' opacity=\'0.5\'/%3E%3C/svg%3E")',
             backgroundSize: '200px 200px'
           }}
           className="absolute inset-0 opacity-40 animate-[spin_120s_linear_infinite]"
         ></div>
      </div>

      {/* Navigation */}
      <header className="relative w-full z-20 border-b border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-center md:justify-between items-center">
          <div className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2 md:mb-0">
            DOODAX
          </div>
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleOpenModal(link.modal)}
                className="text-gray-400 hover:text-white transition-colors text-xs md:text-sm uppercase tracking-widest hover:underline decoration-pink-500 underline-offset-4"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      </header>
      
      {/* Main Content Area */}
      <div className="relative flex-grow flex flex-col items-center justify-start z-10 w-full">
        
        {/* Timer Section - Centered Vertically in viewport */}
        <main className="w-full flex-grow flex flex-col justify-center items-center p-4 min-h-[60vh]">
             {children}
        </main>
        
        {/* SEO Article Section - Bottom */}
        <section className="w-full max-w-4xl px-4 pb-12">
             <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-12"></div>
             <SeoArticle />
        </section>
      </div>

      {/* Footer */}
      <footer className="relative w-full z-20 bg-black/40 backdrop-blur-md border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Doodax. All rights reserved.
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-1">
              Powered by <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-white hover:text-purple-400 transition-colors">HSINI MOHAMED</a>
            </p>
            <div className="flex space-x-4 text-xs">
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">doodax.com</a>
              <span>|</span>
              <a href="mailto:hsini.web@gmail.com" className="hover:text-white transition-colors">hsini.web@gmail.com</a>
            </div>
          </div>
        </div>
      </footer>

      {activeModal && renderModalContent()}
    </div>
  );
};

export default ThemeLayout;