import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Code, Brain, Cpu, Server, Monitor } from 'lucide-react';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Code,
      title: t.skills.languages,
      skills: ['Python', 'JavaScript', 'C/C++', 'Dart'],
      color: 'red'
    },
    {
      icon: Brain,
      title: t.skills.ai,
      skills: ['Machine Learning', 'LSTM', 'Vision par ordinateur', 'OCR', 'TTS', 'Reconnaissance faciale'],
      color: 'white'
    },
    {
      icon: Cpu,
      title: t.skills.iot,
      skills: ['Arduino', 'ESP32', 'Capteurs', 'Actionneurs', 'Systèmes embarqués'],
      color: 'red'
    },
    {
      icon: Server,
      title: t.skills.backend,
      skills: ['Django', 'FastAPI', 'API REST', 'Architecture backend'],
      color: 'white'
    },
    {
      icon: Monitor,
      title: t.skills.frontend,
      skills: ['Three.js', 'React', 'Streamlit', 'Flutter', 'WebGL'],
      color: 'red'
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen bg-black py-32 px-6">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-4">
            {t.skills.title}
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isRed = category.color === 'red';

            return (
              <div
                key={index}
                className={`group relative bg-white/5 border ${
                  isRed ? 'border-red-600/30 hover:border-red-600' : 'border-white/10 hover:border-white/30'
                } p-8 transition-all duration-500 hover:transform hover:-translate-y-2`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mb-6 flex items-center justify-center ${
                  isRed ? 'bg-red-600' : 'bg-white/10'
                } transition-all duration-300`}>
                  <Icon size={28} className={isRed ? 'text-black' : 'text-white'} />
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-6 ${
                  isRed ? 'text-red-600' : 'text-white'
                } group-hover:text-red-600 transition-colors duration-300`}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${
                        isRed ? 'bg-red-600' : 'bg-white/30'
                      }`} />
                      <span className="text-white/70 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ${
                  isRed ? 'border-red-600/50' : 'border-white/10'
                } group-hover:border-red-600 transition-colors duration-300`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;