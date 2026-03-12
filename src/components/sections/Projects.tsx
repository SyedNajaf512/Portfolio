"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        title: "AI Assistant",
        description: "A comprehensive local AI assistant capable of voice interaction, screen vision, and system control. Built with Python and modern speech recognition models.",
        tags: ["Python", "AI/ML", "Speech Recognition", "System Automation"],
        links: { demo: "#", code: "#" },
        gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
        title: "E-Commerce Platform",
        description: "A full-scale e-commerce application with real-time inventory, secure payments, and an admin dashboard. Optimized for performance and sales conversion.",
        tags: ["Node.js", "Stripe", "SQL", "Tailwind CSS"],
        links: { demo: "#", code: "#" },
        gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
        title: "Marketing Analytics Dashboard",
        description: "Data visualization tool for digital marketing campaigns, utilizing AI to predict trends and optimize ad spend across multiple platforms.",
        tags: ["React", "AI Predictive Model", "Node.js"],
        links: { demo: "#", code: "#" },
        gradient: "from-orange-500/20 to-red-500/20",
    },
];

export function Projects() {
    return (
        <section id="projects" className="py-24 bg-background">
            <div className="container px-8 md:px-12 lg:px-20 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            Featured <span className="text-primary">Projects</span>
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-xl">
                            A selection of work that demonstrates my ability to solve complex problems with code and creativity.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="#" className="flex items-center gap-2 group text-primary font-medium hover:text-accent transition-colors">
                            View GitHub <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden border border-white/10 bg-secondary/30 hover:bg-secondary/50 transition-colors"
                        >
                            {/* Card Header/Image Area (Gradient Placeholder) */}
                            <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} group-hover:scale-105 transition-transform duration-500`} />

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-6 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <Link href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </Link>
                                    <Link href={project.links.code} className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" /> View Code
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
