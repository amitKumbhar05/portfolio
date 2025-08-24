"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const educationData = [
  {
    title: "Secondary School Certificate (SSC)",
    institution: "V. S. Satav High School",
    location: "Wagholi, Pune",
    duration: "2017 - 2018",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "BJS",
    location: "Wagholi, Pune",
    duration: "2019 - 2020",
  },
  {
    title: "Bachelor of Engineering (B.E)",
    institution: "JSPM's Imperial College, Pune",
    duration: "2021 - 2025",
  },
];

const experienceData = [
  {
    title: "Trainee Software Engineer",
    company: "Pradisys Technologies",
    duration: "March 2025 - Present",
    description: "Working on AI and backend."
  }
]

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-foreground">Qualification</h2>
          <p className="text-lg text-foreground/70 mt-2">My personal journey</p>
        </motion.div>

        <div className="flex justify-center gap-8 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 text-xl font-semibold pb-2 transition-all duration-300 ${activeTab === 'education'
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground/60 hover:text-foreground'
              }`}
          >
            <GraduationCap size={24} />
            Education
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 text-xl font-semibold pb-2 transition-all duration-300 ${activeTab === 'experience'
                ? 'text-primary border-b-2 border-primary'
                : 'text-foreground/60 hover:text-foreground'
              }`}
          >
            <Briefcase size={24} />
            Experience
          </button>
        </div>

        <div className="relative w-full min-h-[400px]">
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary/30"></div>

          {activeTab === 'education' && (
            <motion.div
              key="education"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                    <div className="md:absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background z-10"></div>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                      className="md:w-1/2 md:pr-8 md:text-right"
                    >
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-foreground/70 mt-1">{item.institution}</p>
                      {item.location && <p className="text-foreground/70">{item.location}</p>}
                      <div className="flex items-center gap-2 mt-2 text-foreground/60 md:justify-end">
                        <Briefcase size={16} />
                        <span>{item.duration}</span>
                      </div>
                    </motion.div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === 'experience' && (
            <motion.div
              key="experience"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              {experienceData.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                    <div className="md:absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background z-10"></div>
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.6 }}
                      className="md:w-1/2 md:pr-8 md:text-right"
                    >
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-foreground/70 mt-1">{item.company}</p>
                      <p className="text-foreground/60 mt-2">{item.description}</p>
                      <div className="flex items-center gap-2 mt-2 text-foreground/60 md:justify-end">
                        <Briefcase size={16} />
                        <span>{item.duration}</span>
                      </div>
                    </motion.div>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;