import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1752854511303_0.png';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Nossos Valores', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120 },
    },
    exit: { opacity: 0, y: -20 },
  };
  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor:
          isScrolled || isMenuOpen
            ? 'rgba(255, 255, 255, 0.9)'
            : 'rgba(249, 250, 251, 0)',
        backdropFilter: isScrolled || isMenuOpen ? 'blur(10px)' : 'blur(0px)',
        boxShadow: isScrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {' '}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {' '}
        <a href="#home" className="flex-shrink-0">
          {' '}
          <motion.img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />{' '}
        </a>{' '}
        <nav className="hidden md:flex items-center space-x-8">
          {' '}
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-dark font-medium hover:text-primary transition-colors duration-300"
            >
              {' '}
              {link.name}{' '}
            </a>
          ))}{' '}
        </nav>{' '}
        <a href="#contact" className="hidden md:inline-block btn btn-primary">
          {' '}
          Fale Conosco{' '}
        </a>{' '}
        <div className="md:hidden">
          {' '}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-dark z-50"
          >
            {' '}
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
      <AnimatePresence>
        {' '}
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden absolute top-full left-0 w-full bg-light shadow-lg"
          >
            {' '}
            <nav className="flex flex-col items-center space-y-6 py-8">
              {' '}
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-dark text-lg font-semibold hover:text-primary transition-colors duration-300"
                >
                  {' '}
                  {link.name}{' '}
                </a>
              ))}{' '}
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="btn btn-primary mt-4"
              >
                {' '}
                Fale Conosco{' '}
              </a>{' '}
            </nav>{' '}
          </motion.div>
        )}{' '}
      </AnimatePresence>{' '}
    </motion.header>
  );
}
