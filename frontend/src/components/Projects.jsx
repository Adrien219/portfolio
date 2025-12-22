import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'intellibateur',
      title: t.projects.intellibateur.title,
      description: t.projects.intellibateur.description,
      tech: t.projects.intellibateur.tech,
      image: null, // Placeholder
      link: '#'
    },
    {
      id: 'navigation',
      title: t.projects.navigation.title,
      description: t.projects.navigation.description,
      tech: t.projects.navigation.tech,
      image: null,
      link: '#'
    },
    {
      id: 'medflow',
      title: t.projects.medflow.title,
      description: t.projects.medflow.description,
      tech: t.projects.medflow.tech,
      image: null,
      link: '#'
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-black py-32 px-6">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-20">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-4">
            {t.projects.title}
          </h2>
          <div className="w-32 h-1 bg-red-600" />
        </div>

        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:grid-flow-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative aspect-video bg-white/5 border border-white/10 overflow-hidden group-hover:border-red-600/50 transition-all duration-500 ${
                index % 2 === 1 ? 'md:col-start-2' : ''
              }`}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-red-600/20 border-2 border-red-600 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl font-black text-red-600">{index + 1}</span>
                      </div>
                      <p className="text-white/30 text-sm">Image du projet</p>
                      <p className="text-white/20 text-xs mt-1">(À intégrer)</p>
                    </div>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      className="w-12 h-12 bg-red-600 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${
                index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''
              }`}>
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 border border-red-600">
                  <div className="w-2 h-2 bg-red-600" />
                  <span className="text-red-600 text-sm font-bold uppercase tracking-wider">
                    Projet {index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-black text-white leading-tight group-hover:text-red-600 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-white/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-2">
                  <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Technologies</p>
                  <p className="text-white/80 text-base">{project.tech}</p>
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  className="inline-flex items-center gap-3 px-6 py-3 bg-red-600 text-black font-bold hover:bg-white transition-all duration-300"
                >
                  {t.projects.viewProject}
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;