'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Services');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (item) => {
    setActiveLink(item);
    setIsOpen(false);
  };

  const menuVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 },
      },
    },
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        y: { type: 'spring', stiffness: 100, damping: 20 },
        opacity: { duration: 0.3 },
      },
    },
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Spotlight', href: '/spotlight' },
    { name: 'Fun at SS', href: '/fun-at-ss' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQs', href: '/faqs' },
  ];

  return (
    <header className="bg-[#F9CFCA] shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Shaadi Squad Logo"
              width={50}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-gray-700 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? 'M6 18L18 6M6 6l12 12' // X icon
                    : 'M4 6h16M4 12h16M4 18h16' // Hamburger icon
                }
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span
                  onClick={() => handleLinkClick(item.name)}
                  className={`relative inline-block text-xs lg:text-sm font-bold tracking-wide px-3 py-1 rounded-full transition-all duration-300 ease-in-out whitespace-nowrap ${
                    activeLink === item.name
                      ? 'text-[#EE3164] border-b-2 border-[#EE3164] pb-1'
                      : 'text-gray-700 hover:text-[#EE3164] hover:border-b-2 hover:border-[#EE3164] transition-all duration-200 ease-in-out hover:scale-105'
                  }`}
                >
                  {item.name.toUpperCase()}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden absolute top-[52px] left-0 w-full bg-[#F9CFCA] shadow-lg rounded-b-lg"
            >
              <ul className="flex flex-col items-center space-y-4 py-4">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href}>
                      <span
                        onClick={() => handleLinkClick(item.name)}
                        className={`inline-block text-sm font-bold tracking-wide px-3 py-1 rounded-full transition-all duration-300 ease-in-out ${
                          activeLink === item.name
                            ? 'text-[#EE3164] border-b-2 border-[#EE3164] pb-1'
                            : 'text-gray-700 hover:text-[#EE3164] hover:border-b-2 hover:border-[#EE3164] transition-all duration-200 ease-in-out hover:scale-105'
                        }`}
                      >
                        {item.name.toUpperCase()}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}