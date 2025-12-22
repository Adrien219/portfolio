import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="relative bg-black border-t border-white/10 py-12 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-white tracking-tight">
              <span className="text-red-600">A</span>M
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-white/50 text-sm">{t.footer.rights}</p>
            <p className="text-white/30 text-xs mt-1">{t.footer.made}</p>
          </div>

          {/* Red Accent */}
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-600" />
            <div className="w-3 h-3 bg-white/20" />
            <div className="w-3 h-3 bg-red-600" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;