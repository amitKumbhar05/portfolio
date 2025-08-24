"use client"
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';

// Navbar Component
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [hasScrolled, setHasScrolled] = useState(false);
    const [mounted, setMounted] = useState(false); // State to track if component is mounted
    const { theme, setTheme } = useTheme(); // Call useTheme unconditionally

    // Effect to set mounted state on client-side
    useEffect(() => {
        setMounted(true);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' }
    ];

    // Effect to detect scroll position for active link and background change
    useEffect(() => {
        const handleScroll = () => {
            // Change navbar background on scroll
            if (window.scrollY > 10) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }

            // Set active section
            const sections = navItems.map(item => document.getElementById(item.href.substring(1)));
            const scrollPosition = window.scrollY + 150; // Offset for better accuracy

            sections.forEach(section => {
                if (section && scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navItems]);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${hasScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="text-2xl font-bold text-foreground">
                           Amit Kumbhar
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                                >
                                    <span className={activeSection === item.href.substring(1) ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'}>
                                        {item.name}
                                    </span>
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                                            layoutId="underline"
                                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>
                        {mounted && ( // Conditionally render theme toggle only when mounted
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="ml-4 p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                        )}
                    </div>

                    {/* Mobile Menu Button and Theme Toggle */}
                    <div className="md:hidden flex items-center space-x-2">
                        {mounted && ( // Conditionally render theme toggle only when mounted
                            <button
                                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                className="p-2 rounded-full text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors duration-300"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                            </button>
                        )}
                        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground/80 hover:text-foreground p-2">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="md:hidden overflow-hidden bg-background"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                                            activeSection === item.href.substring(1)
                                                ? 'text-foreground bg-primary/20'
                                                : 'text-foreground/60 hover:text-foreground hover:bg-primary/10'
                                        }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;