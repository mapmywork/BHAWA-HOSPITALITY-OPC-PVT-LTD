import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, maxWidth = 'max-w-2xl' }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0F172A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className={`relative w-full ${maxWidth} bg-[#FAFAF8] rounded-2xl shadow-2xl border border-[#C89B3C]/30 overflow-hidden transform transition-all`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between border-b border-[#C89B3C]/20 text-white">
          <h3 className="font-playfair text-xl font-bold tracking-wide flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 border border-[#C89B3C]/40">
              <img src="/logo.jpeg" alt="Bhawa Hospitality Logo" className="w-full h-full object-cover" />
            </div>
            <span>{title}</span>
          </h3>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-1.5 rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
