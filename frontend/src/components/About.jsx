import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Target, Lightbulb } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative min-h-screen bg-black py-32 px-6">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-4">
            {t.about.title}
          </h2>
          <div className="w-32 h-1 bg-red-600" />
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="w-full aspect-[4/5] bg-white/5 border border-white/10 overflow-hidden group hover:border-red-600/50 transition-all duration-500">
              <img 
                src="/profile2.jpg" 
                alt="Adriel Mulongoy - Développeur de Systèmes Intelligents"
                className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Description */}
            <div>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {t.about.text1}
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                {t.about.text2}
              </p>
            </div>

            {/* Philosophy Card */}
            <div className="bg-white/5 border border-white/10 p-8 hover:border-red-600/50 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={24} className="text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {t.about.philosophy}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {t.about.philosophyText}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-red-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-red-600">3+</span>
                </div>
                <p className="text-white/50 text-sm">Projets majeurs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center mx-auto mb-3">
                  <Target size={24} className="text-white/50" />
                </div>
                <p className="text-white/50 text-sm">Innovation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold text-black">AI</span>
                </div>
                <p className="text-white/50 text-sm">Expertise IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;