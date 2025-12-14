"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express", "SQL", "MongoDB", "Python"],
    },
    {
        name: "AI & Data",
        skills: ["OpenAI API", "Prompt Engineering"],
    },
    {
        name: "Tools & DevOps",
        skills: ["Git", "Figma", "SEO Tools"],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-24 bg-gradient-to-b from-background to-secondary/20">
            <div className="container px-8 md:px-12 lg:px-20 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Text Content */}
                    <div className="w-full md:w-1/3 space-y-6 sticky top-24">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold"
                        >
                            Technical <span className="text-accent">Proficiency</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg"
                        >
                            My expertise spans across the full stack of web development, advanced AI implementation, and modern digital marketing tools. I stay ahead of the curve to deliver cutting-edge solutions.
                        </motion.p>
                    </div>

                    {/* Skills Grid */}
                    <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="text-xl font-semibold text-foreground/80 border-b border-white/10 pb-2">
                                    {category.name}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <span
                                            key={skillIdx}
                                            className="px-3 py-1.5 text-sm bg-secondary rounded-md text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
