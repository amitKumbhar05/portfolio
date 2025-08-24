"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { Award, Briefcase, Zap, BrainCircuit } from 'lucide-react';

const AboutMe = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } }
    };

    const imageVariants: Variants = {
      hidden: { scale: 0.8, opacity: 0 },
      visible: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.7,
          ease: "easeOut"
        }
      }
    }

    return (
        <section id="about" className="min-h-screen flex items-center bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-center"
                >
                    {/* Image Section */}
                    <motion.div
                        variants={imageVariants}
                        className="hidden lg:flex lg:col-span-1 w-full justify-center"
                    >
                        <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-card border-4 border-primary/10 shadow-2xl flex items-center justify-center overflow-hidden">
                           <Image src="/Amit.png" alt="Amit" width={320} height={320} className="object-cover" />
                        </div>
                    </motion.div>

                    {/* Text Content Section */}
                    <motion.div
                        variants={containerVariants}
                        className="lg:col-span-2"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-center lg:text-left">
                            About Me
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-8 leading-relaxed tracking-normal text-justify">
                            I'm a passionate <strong className="text-primary font-semibold">AI Engineer and Backend Developer</strong> focused on building <strong className="text-primary font-semibold">intelligent, scalable systems</strong>. With a foundation in Python, Node.js, and modern AI tools, I specialize in crafting APIs, automating workflows, and integrating AI capabilities into robust applications. I love turning complex ideas into working systems and continuously challenge myself to learn and innovate.
                            Driven by curiosity and a love for <strong className="text-primary font-semibold">problem-solving</strong>, I’m always exploring new technologies in AI, system design, and cloud infrastructure to push the boundaries of what’s possible.
                        </motion.p>

                        {/* Info Cards */}
                        <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-card p-6 rounded-lg text-center">
                                <Briefcase className="mx-auto h-8 w-8 text-primary mb-3" />
                                <h3 className="text-xl font-bold text-foreground">6 Months</h3>
                                <p className="text-foreground/60">Experience</p>
                            </div>
                            <div className="bg-card p-6 rounded-lg text-center">
                                <Zap className="mx-auto h-8 w-8 text-primary mb-3" />
                                <h3 className="text-xl font-bold text-foreground">10+</h3>
                                <p className="text-foreground/60">Projects Done</p>
                            </div>
                            <div className="bg-card p-6 rounded-lg text-center">
                                <BrainCircuit className="mx-auto h-8 w-8 text-primary mb-3" />
                                <h3 className="text-xl font-bold text-foreground">Creative</h3>
                                <p className="text-foreground/60">Problem Solving</p>
                            </div>
                        </motion.div>
                        
                        <motion.div variants={itemVariants}>
                            <a href="#portfolio" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
                                View My Work
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutMe;