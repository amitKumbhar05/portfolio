"use client"
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Database, Bot, GitBranch, Cloud, Settings } from 'lucide-react';

const skillsData = [
    {
        category: 'Languages & Frameworks',
        icon: <Code className="w-8 h-8 mb-4 text-primary" />,
        skills: ['Python', 'JavaScript/TypeScript', 'Node.js', 'Express.js', 'React/Next.js', 'Flask']
    },
    {
        category: 'Databases',
        icon: <Database className="w-8 h-8 mb-4 text-primary" />,
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase']
    },
    {
        category: 'AI & Machine Learning',
        icon: <Bot className="w-8 h-8 mb-4 text-primary" />,
        skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain', 'OpenAI API']
    },
    {
        category: 'Developer Tools',
        icon: <GitBranch className="w-8 h-8 mb-4 text-primary" />,
        skills: ['Git & GitHub', 'Docker', 'Postman', 'VS Code']
    },
    {
        category: 'Cloud & DevOps',
        icon: <Cloud className="w-8 h-8 mb-4 text-primary" />,
        skills: ['AWS', 'Google Cloud', 'Vercel', 'CI/CD']
    },
    {
        category: 'System Design',
        icon: <Settings className="w-8 h-8 mb-4 text-primary" />,
        skills: ['Microservices', 'REST APIs', 'System Scalability', 'High Availability']
    }
];

const SkillsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    return (
        <section id="skills" className="py-20 bg-background text-foreground">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="text-center"
                >
                    <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-bold mb-4">
                        My Technical Skills
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-lg text-foreground/70 mb-12 max-w-3xl mx-auto">
                        A showcase of the tools and technologies I use to bring ideas to life.
                    </motion.p>
                </motion.div>

                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {skillsData.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-card p-6 rounded-lg shadow-lg hover:shadow-primary/20 transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {category.icon}
                                <h3 className="text-2xl font-bold text-foreground ml-4">{category.category}</h3>
                            </div>
                            <ul className="space-y-2">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center text-foreground/80">
                                        <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;