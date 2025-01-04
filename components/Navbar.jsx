'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { navVariants } from '../utils/motion';
import { xPaddings, innerWidth } from '../styles';

const handleMenuClick = (sectionId, isPage = false) => {
  if (isPage) {
    window.location.href = `/${sectionId}`;
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  setIsMenuOpen(false);
};

const handleLogoClick = () => {
  window.location.href = '/';
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      height: '100vh',
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const menuItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${xPaddings} py-8 relative z-50`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${innerWidth} mx-auto flex justify-between gap-8`}>
        <img 
          src="/logo_xs.png" 
          alt="home" 
          className="w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={handleLogoClick}
        />
        <h2 className="font-extrabold text-[24px] text-white leading-[30px]">
          TGAIGENTS
        </h2>
        <div
          className="cursor-pointer z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain"
          />
        </div>
        <motion.div
          initial={false}
          animate={isMenuOpen ? 'open' : 'closed'}
          variants={menuVariants}
          className="fixed top-0 left-0 w-full bg-primary-black/90 backdrop-blur-lg z-40"
        >
          <div className="h-full flex items-center justify-center">
            <motion.ul
              className="space-y-8 text-center"
              variants={{
                open: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.2 },
                },
                closed: {
                  transition: { staggerChildren: 0.05, staggerDirection: -1 },
                },
              }}
            >
              {[
                { id: 'about', label: 'About' },
                { id: 'explore', label: 'Explore' },
                { id: 'get-started', label: 'Get Started' },
                { id: 'world', label: 'Global reach' },
                { id: 'documentation', label: 'Documentation', isPage: true },
              ].map((item) => (
                <motion.li
                  key={item.id}
                  variants={menuItemVariants}
                  className="cursor-pointer"
                  onClick={() => handleMenuClick(item.id, item.isPage)}
                >
                  <span className="text-white text-3xl font-bold hover:text-gray-300 transition-colors">
                    {item.label}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
