"use client"
// Hero Section Component
import Image from 'next/image';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSection = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ['Backend Engineer', 'AI & ML Enthusiast', 'Creative Problem Solver', 'Automation Builder'];

    // Effect for cycling through roles
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000); // Change role every 3 seconds
        return () => clearInterval(interval);
    }, [roles.length]);

    // Animation variants for Framer Motion
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const roleTextVariants = {
        hidden: { y: 15, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
        exit: { y: -15, opacity: 0, transition: { duration: 0.4 } }
    };


    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-background text-foreground pt-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    {/* Left Side: Text Content */}
                    <div className="text-center lg:text-left">
                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3">
                            Hi, I'm <span className="text-primary">Amit</span>
                        </motion.h1>

                        {/* Animated Role Text */}
                        <motion.div variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl text-foreground/70 mb-6 h-10 flex items-center justify-center lg:justify-start font-medium">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={currentRole}
                                    variants={roleTextVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    className="whitespace-nowrap"
                                >
                                    {roles[currentRole]}
                                </motion.span>
                            </AnimatePresence>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                            Driven to build intelligent, efficient, and impactful digital solutions. I turn ideas into reality through smart systems and purposeful backend innovation.
                        </motion.p>

                        {/* Action Buttons */}
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                                Download CV
                            </button>
                            <button className="border border-primary/20 text-primary px-8 py-3 rounded-full font-medium hover:bg-primary/10 hover:text-primary-foreground transition-all duration-300">
                                Let's Talk
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div variants={itemVariants} className="flex justify-center lg:justify-start space-x-6">
                            <a href="https://www.linkedin.com/in/amit-kumbhar-2468a024a/" className="text-foreground/60 hover:text-foreground transition-colors duration-300 transform hover:scale-125">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/amitKumbhar05" className="text-foreground/60 hover:text-foreground transition-colors duration-300 transform hover:scale-125">
                                <Github size={24} />
                            </a>
                            <a href="tel:8208620606" className="text-foreground/60 hover:text-foreground transition-colors duration-300 transform hover:scale-125">
                                <Phone size={24} />
                            </a>
                            <a href="mailto:amitkumbhar9800@gmail.com" className="text-foreground/60 hover:text-foreground transition-colors duration-300 transform hover:scale-125">
                                <Mail size={24} />
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Side: Animated Profile Graphic */}
                    {/* Right Side: Animated Profile Graphic */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, transition: { duration: 0.7, delay: 0.5, ease: 'easeOut' } }}
                    >
                        <motion.div
                            className="relative w-64 h-64 sm:w-80 sm:h-80"
                            animate={{ y: ["-10px", "10px"] }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut"
                            }}
                        >
                            {/* Animated spinning & pulsing borders */}
                            <motion.div
                                className="absolute inset-0 border-2 border-primary/20 rounded-full"
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.02, 1],
                                }}
                                transition={{
                                    rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3.5, repeat: Infinity, ease: "easeInOut", repeatType: "reverse" }
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 border-2 border-primary/10 rounded-full"
                                style={{ inset: '10px' }}
                                animate={{
                                    rotate: -360,
                                    scale: [1, 1.04, 1],
                                }}
                                transition={{
                                    rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut", repeatType: "reverse", delay: 0.5 }
                                }}
                            />
                            {/* Inner content */}
                            <div className="absolute inset-6 bg-background/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                                <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-background flex items-center justify-center overflow-hidden shadow-2xl">
                                    <Image src="/Amit.png" alt="Amit" width={256} height={256} className="object-cover w-full h-full" />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;