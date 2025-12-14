"use client";

import { motion } from "framer-motion";
import { Code, Bot, Megaphone, PenTool } from "lucide-react";

const services = [
    {
        icon: <Code className="w-10 h-10 text-primary" />,
        title: "Full Stack Development",
        description: "Building scalable, high-performance web applications using Next.js, React, Node.js, and modern databases.",
        gradient: "from-primary/20 to-primary/5",
    },
    {
        icon: <Bot className="w-10 h-10 text-accent" />,
        title: "AI Integration",
        description: "Leveraging Large Language Models (LLMs) and custom AI solutions to automate workflows and enhance user experiences.",
        gradient: "from-accent/20 to-accent/5",
    },
    {
        icon: <Megaphone className="w-10 h-10 text-pink-500" />,
        title: "Digital Marketing",
        description: "Data-driven strategies to boost online presence, optimize conversions, and grow your brand audience effectively.",
        gradient: "from-pink-500/20 to-pink-500/5",
    },
    {
        icon: <PenTool className="w-10 h-10 text-orange-500" />,
        title: "AI Content Creation",
        description: "High-quality, SEO-optimized content generation powered by advanced AI tools and human creativity.",
        gradient: "from-orange-500/20 to-orange-500/5",
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            {/* Decorative blobs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="container px-8 md:px-12 lg:px-20 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold"
                    >
                        My <span className="text-primary">Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-muted-foreground text-lg max-w-2xl mx-auto"
                    >
                        Combining technical expertise with creative strategy to deliver comprehensive digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group p-6 rounded-2xl border border-white/5 bg-gradient-to-b ${service.gradient} hover:border-white/10 transition-all duration-300 hover:-translate-y-2`}
                        >
                            <div className="mb-4 bg-background/50 w-16 h-16 rounded-xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
