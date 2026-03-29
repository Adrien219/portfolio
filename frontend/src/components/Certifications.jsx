import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Award } from 'lucide-react';

const Certifications = () => {
  const { t } = useLanguage();

  // Placeholder certifications - À remplacer avec les vraies certifications
  const certifications = [
    { id: 1, name: 'Certification 1', issuer: 'Organisation', year: '2024' },
    { id: 2, name: 'Certification 2', issuer: 'Organisation', year: '2024' },
    { id: 3, name: 'Certification 3', issuer: 'Organisation', year: '2023' }
  ];

  return (
    <section id="certifications" className="relative min-h-screen bg-black py-32 px-6">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-4">
            {t.certifications.title}
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Placeholder Message */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="bg-white/5 border border-white/10 p-12">
            <Award size={48} className="text-red-600 mx-auto mb-6" />
            <p className="text-xl text-white/70 leading-relaxed">
              {t.certifications.placeholder}
            </p>
          </div>
        </div>

        {/* Certification Cards (Hidden by default - to show when data is added) */}
        <div className="grid md:grid-cols-3 gap-8 opacity-30">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/5 border border-white/10 p-8 hover:border-red-600/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 bg-red-600/20 border-2 border-red-600 mx-auto mb-6 flex items-center justify-center">
                <Award size={28} className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-white text-center mb-2 group-hover:text-red-600 transition-colors duration-300">
                {cert.name}
              </h3>
              <p className="text-white/60 text-center text-sm mb-2">{cert.issuer}</p>
              <p className="text-white/40 text-center text-xs">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;