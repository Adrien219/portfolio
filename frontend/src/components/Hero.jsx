import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-radial from-red-900/20 via-black to-black animate-pulse-slow" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      {/* Content */}
      <div ref={heroRef} className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Decorative Line */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-px bg-red-600 w-20" />
          <div className="w-3 h-3 bg-red-600 mx-4" />
          <div className="h-px bg-red-600 w-20" />
        </div>

        {/* Main Title */}
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tighter text-white mb-6">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <div className="relative inline-block mb-8">
          <h2 className="text-[clamp(1.2rem,3vw,2rem)] font-bold text-red-600 tracking-wide uppercase">
            {t.hero.subtitle}
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent" />
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-12 font-light">
          {t.hero.description}
        </p>

        {/* Decorative Badges */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
            <span className="text-white/50 text-xs font-bold">AI</span>
          </div>
          <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-black text-sm font-bold">IoT</span>
          </div>
          <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center">
            <span className="text-white/50 text-xs font-bold">3D</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce"
      >
        <ChevronDown size={32} className="text-white/50 hover:text-red-600 transition-colors duration-300" />
      </button>

      {/* Red Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
    </section>
  );
};

export default Hero;