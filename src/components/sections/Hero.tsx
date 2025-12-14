"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container px-8 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1"
                >
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                        Available for Freelance & Full-time
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                        Hi, I'm <span className="text-foreground">Syed Najaf Turab</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            Building the Future with AI
                        </span>
                    </h1>

                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
                        I help businesses grow by combining Full Stack Development, Digital Marketing strategies, and cutting-edge AI solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
                        >
                            View Work
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>

                        <a
                            href="/CV.pdf"
                            download
                            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-input bg-background/50 hover:bg-accent/10 hover:text-accent hover:border-accent/50 transition-all backdrop-blur-sm cursor-pointer"
                        >
                            Download CV
                            <Download className="ml-2 w-4 h-4" />
                        </a>
                    </div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 relative w-full max-w-md aspect-square order-1 md:order-2"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
                    <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                        <img
                            src="/unnamed.jpg"
                            alt="Syed Najaf Turab"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </motion.div>
            </div>

            {/* Tech Stack Marquee (Simplified as static icons for now, can be marquee later) */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="pt-12 text-muted-foreground text-sm"
            >

            </motion.div>
        </section>
    );
}
