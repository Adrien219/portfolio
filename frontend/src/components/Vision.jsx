import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, Heart, Package, Globe2 } from 'lucide-react';

const Vision = () => {
  const { t } = useLanguage();

  const visionItems = [
    {
      icon: Zap,
      title: t.vision.innovation,
      description: t.vision.innovationText,
      color: 'red'
    },
    {
      icon: Heart,
      title: t.vision.impact,
      description: t.vision.impactText,
      color: 'white'
    },
    {
      icon: Package,
      title: t.vision.products,
      description: t.vision.productsText,
      color: 'red'
    },
    {
      icon: Globe2,
      title: t.vision.openSource,
      description: t.vision.openSourceText,
      color: 'white'
    }
  ];

  return (
    <section id="vision" className="relative min-h-screen bg-black py-32 px-6">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-4">
            {t.vision.title}
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Vision Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {visionItems.map((item, index) => {
            const Icon = item.icon;
            const isRed = item.color === 'red';

            return (
              <div
                key={index}
                className="group relative bg-white/5 border border-white/10 p-12 hover:border-red-600 transition-all duration-500 hover:transform hover:-translate-y-2"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 w-12 h-12 bg-black border border-white/10 flex items-center justify-center">
                  <span className="text-white/30 text-xl font-bold">0{index + 1}</span>
                </div>

                {/* Icon */}
                <div className={`w-20 h-20 mb-8 flex items-center justify-center ${
                  isRed ? 'bg-red-600' : 'bg-white/10'
                } transition-all duration-300`}>
                  <Icon size={32} className={isRed ? 'text-black' : 'text-white'} />
                </div>

                {/* Title */}
                <h3 className={`text-3xl font-black mb-6 ${
                  isRed ? 'text-red-600' : 'text-white'
                } group-hover:text-red-600 transition-colors duration-300`}>
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-white/70 leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-white/10 group-hover:border-red-600 transition-colors duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Vision;