"use client"
import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-card text-foreground">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    <div className="text-center md:text-left">
                        <p className="text-lg font-semibold">Amit Kumbhar</p>
                        <p className="text-sm text-foreground/60">AI & Backend Engineer</p>
                    </div>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/amit-kumbhar-2468a024a/" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/amitKumbhar05" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                            <Github size={24} />
                        </a>
                        <a href="tel:8208620606" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                            <Phone size={24} />
                        </a>
                        <a href="mailto:amitkumbhar9800@gmail.com" className="text-foreground/60 hover:text-primary transition-colors duration-300">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-primary/10 pt-6 text-center text-sm text-foreground/50">
                    <p>&copy; {new Date().getFullYear()} Amit Kumbhar. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;