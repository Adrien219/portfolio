import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Send, Github, MessageCircle, Linkedin, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Contact = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
      
      if (response.data.success) {
        toast({
          title: t.contact.success,
          description: response.data.message,
        });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      const errorMsg = error.response?.data?.detail || t.contact.error;
      toast({
        title: 'Erreur',
        description: errorMsg,
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      label: t.contact.github,
      href: 'https://github.com/Adrien219',
      color: 'white'
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsapp,
      href: 'https://wa.me/243971797884',
      color: 'red'
    },
    {
      icon: Linkedin,
      label: t.contact.linkedin,
      href: '#',
      color: 'white'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:adriellubabila219@gmail.com',
      color: 'red'
    }
  ];

  return (
    <section id="contact" className="relative min-h-screen bg-black py-32 px-6">
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, transparent 7.6923%),
                          repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)`
      }} />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Title */}
        <div className="mb-20 text-center">
          <h2 className="text-[clamp(3rem,8vw,6rem)] font-black text-white leading-none tracking-tighter mb-4">
            {t.contact.title}
          </h2>
          <div className="w-32 h-1 bg-red-600 mx-auto mb-6" />
          <p className="text-2xl text-white/70">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-white/70 text-sm font-bold uppercase tracking-wider mb-3">
                  {t.contact.name}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-red-600 transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-white/70 text-sm font-bold uppercase tracking-wider mb-3">
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-red-600 transition-colors duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-white/70 text-sm font-bold uppercase tracking-wider mb-3">
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 text-white px-6 py-4 focus:outline-none focus:border-red-600 transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 text-black font-bold py-4 px-8 hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.contact.sending : t.contact.send}
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Liens directs</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => {
                  const Icon = link.icon;
                  const isRed = link.color === 'red';

                  return (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-6 p-6 bg-white/5 border ${
                        isRed ? 'border-red-600/30 hover:border-red-600 hover:bg-red-600/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                      } transition-all duration-300`}
                    >
                      <div className={`w-14 h-14 flex items-center justify-center ${
                        isRed ? 'bg-red-600' : 'bg-white/10'
                      } transition-all duration-300`}>
                        <Icon size={24} className={isRed ? 'text-black' : 'text-white'} />
                      </div>
                      <span className={`text-lg font-bold ${
                        isRed ? 'text-red-600' : 'text-white'
                      } group-hover:text-red-600 transition-colors duration-300`}>
                        {link.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Email Direct */}
            <div className="bg-white/5 border border-white/10 p-8">
              <p className="text-white/70 text-sm font-bold uppercase tracking-wider mb-3">Email Direct</p>
              <a
                href="mailto:adriellubabila219@gmail.com"
                className="text-xl text-white hover:text-red-600 transition-colors duration-300 break-all"
              >
                adriellubabila219@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-white/5 border border-white/10 p-8">
              <p className="text-white/70 text-sm font-bold uppercase tracking-wider mb-3">Téléphone</p>
              <a
                href="tel:+243971797884"
                className="text-xl text-white hover:text-red-600 transition-colors duration-300"
              >
                +243 971 797 884
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;