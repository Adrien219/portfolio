import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-[7.6923%] h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => scrollToSection('hero')}>
          <div className="text-2xl font-bold text-white tracking-tight">
            <span className="text-red-600">A</span>M
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('hero')} className="nav-link">
            {t.nav.home}
          </button>
          <button onClick={() => scrollToSection('about')} className="nav-link">
            {t.nav.about}
          </button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">
            {t.nav.skills}
          </button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">
            {t.nav.projects}
          </button>
          <button onClick={() => scrollToSection('certifications')} className="nav-link">
            {t.nav.certifications}
          </button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">
            {t.nav.contact}
          </button>
        </nav>

        {/* Language Switch */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white transition-all duration-300 border-0"
          >
            <Globe size={18} />
            <span className="font-medium text-sm">{language.toUpperCase()}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col px-[7.6923%] py-4 gap-4">
            <button onClick={() => scrollToSection('hero')} className="nav-link-mobile">
              {t.nav.home}
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link-mobile">
              {t.nav.about}
            </button>
            <button onClick={() => scrollToSection('skills')} className="nav-link-mobile">
              {t.nav.skills}
            </button>
            <button onClick={() => scrollToSection('projects')} className="nav-link-mobile">
              {t.nav.projects}
            </button>
            <button onClick={() => scrollToSection('certifications')} className="nav-link-mobile">
              {t.nav.certifications}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link-mobile">
              {t.nav.contact}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;