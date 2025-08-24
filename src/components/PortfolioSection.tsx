"use client"
import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView, Variants } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'AI-Powered Chatbot',
        description: 'A conversational AI assistant built with Node.js and integrated with the OpenAI API for natural language understanding.',
        image: '/file.svg',
        tags: ['Node.js', 'AI', 'OpenAI', 'API'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        title: 'E-commerce Backend',
        description: 'A scalable and secure backend system for an e-commerce platform, featuring product management, user authentication, and order processing.',
        image: '/file.svg',
        tags: ['Python', 'Flask', 'PostgreSQL', 'REST API'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        title: 'Data Automation Pipeline',
        description: 'An automated data pipeline that extracts, transforms, and loads data from multiple sources into a centralized data warehouse.',
        image: '/file.svg',
        tags: ['Python', 'AWS', 'ETL', 'Automation'],
        liveUrl: '#',
        githubUrl: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'A personal portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects.',
        image: '/file.svg',
        tags: ['Next.js', 'React', 'Tailwind CSS'],
        liveUrl: '#',
        githubUrl: '#'
    }
];

const PortfolioSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        <section id="portfolio" className="py-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="text-center mb-12"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold">
                        My Portfolio
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my passion for building software.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-card rounded-lg overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                        >
                            <div className="relative h-56 w-full">
                                <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-foreground mb-2">{project.title}</h3>
                                <p className="text-foreground/70 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                                        <Github size={24} />
                                    </a>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                                        <ExternalLink size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PortfolioSection;