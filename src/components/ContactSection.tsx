"use client"
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section id="contact" className="relative py-24 bg-gradient-to-br from-background to-background/80 text-foreground overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="text-center mb-16"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold tracking-tight">
                        Get In Touch
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto">
                        Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form below or reach out through my social channels.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Contact Form */}
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        className="lg:col-span-2 bg-card/50 backdrop-blur-sm border border-primary/10 p-8 rounded-2xl shadow-2xl shadow-primary/5"
                    >
                        <form>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your Name" className="w-full px-4 py-3 bg-background/70 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300" />
                                </motion.div>
                                <motion.div variants={itemVariants}>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">Email</label>
                                    <input type="email" id="email" name="email" placeholder="Your Email" className="w-full px-4 py-3 bg-background/70 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300" />
                                </motion.div>
                            </div>
                            <motion.div variants={itemVariants} className="mt-6">
                                <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">Message</label>
                                <textarea id="message" name="message" rows={5} placeholder="How can I help you?" className="w-full px-4 py-3 bg-background/70 border border-primary/20 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300"></textarea>
                            </motion.div>
                            <motion.div variants={itemVariants} className="mt-8 text-center">
                                <button type="submit" className="w-full sm:w-auto bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:bg-primary/90 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20">
                                    Send Message
                                </button>
                            </motion.div>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        variants={containerVariants}
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="flex items-center bg-card/50 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl shadow-lg">
                            <div className="flex-shrink-0">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <Mail className="w-7 h-7 text-primary" />
                                </div>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-xl font-bold">Email</h3>
                                <a href="mailto:amitkumbhar9800@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">amitkumbhar9800@gmail.com</a>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center bg-card/50 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl shadow-lg">
                            <div className="flex-shrink-0">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <Phone className="w-7 h-7 text-primary" />
                                </div>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-xl font-bold">Phone</h3>
                                <a href="tel:+918208620606" className="text-foreground/70 hover:text-primary transition-colors">8208620606</a>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center bg-card/50 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl shadow-lg">
                            <div className="flex-shrink-0">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </div>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-xl font-bold">LinkedIn</h3>
                                <a href="https://www.linkedin.com/in/amit-kumbhar-2468a024a/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">amit-kumbhar-2468a024a</a>
                            </div>
                        </motion.div>
                        <motion.div variants={itemVariants} className="flex items-center bg-card/50 backdrop-blur-sm border border-primary/10 p-6 rounded-2xl shadow-lg">
                            <div className="flex-shrink-0">
                                <div className="bg-primary/10 p-4 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </div>
                            </div>
                            <div className="ml-5">
                                <h3 className="text-xl font-bold">GitHub</h3>
                                <a href="https://github.com/amitKumbhar05" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">amitKumbhar05</a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;