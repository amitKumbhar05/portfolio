"use client"
import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Bot, Server, Code, Zap } from 'lucide-react';

const services = [
    {
        icon: <Server className="w-10 h-10 text-primary" />,
        title: 'Backend Development',
        description: 'Building robust and scalable server-side applications and APIs using Node.js, Python, and modern database technologies.'
    },
    {
        icon: <Bot className="w-10 h-10 text-primary" />,
        title: 'AI & ML Integration',
        description: 'Integrating intelligent models and AI-powered features into your applications to create smarter, more efficient user experiences.'
    },
    {
        icon: <Code className="w-10 h-10 text-primary" />,
        title: 'Web Application Development',
        description: 'Developing full-stack web applications with a focus on performance, security, and user experience, using frameworks like Next.js.'
    },
    {
        icon: <Zap className="w-10 h-10 text-primary" />,
        title: 'Automation & Tooling',
        description: 'Creating custom scripts and tools to automate repetitive tasks, streamline workflows, and improve development productivity.'
    }
];

const ServicesSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    };

    return (
        <section id="services" className="py-20 bg-background/80 text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-foreground">
                        What I Offer
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                        I provide high-quality solutions designed to solve problems and drive growth.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-card p-8 rounded-xl shadow-lg text-center flex flex-col items-center transform hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                            <p className="text-foreground/70 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesSection;