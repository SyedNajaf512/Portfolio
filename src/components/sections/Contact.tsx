"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Project Inquiry",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://www.emailjs.com/
        const SERVICE_ID = "service_ivxq01j";
        const TEMPLATE_ID = "template_s9y3nay";
        const PUBLIC_KEY = "zI8vOoKKt4kTN8Onu";



        try {
            await emailjs.sendForm(
                SERVICE_ID,
                TEMPLATE_ID,
                formRef.current!,
                PUBLIC_KEY
            );
            setStatus("success");
            setFormData({ name: "", email: "", subject: "Project Inquiry", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error);
            // @ts-ignore
            if (error.text) console.error("Error Text:", error.text);
            setStatus("error");
            alert("Failed to send message per console details. Check console F12.");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-background to-background -z-10" />

            <div className="container px-8 md:px-12 lg:px-20 mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Let's Work <br />
                            <span className="text-primary">Together</span>
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Have a project in mind? Whether it's a new website, an AI integration, or a digital marketing campaign, I'm ready to help you achieve your goals.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="p-4 rounded-xl bg-secondary/30 border border-white/5 backdrop-blur-sm">
                                <p className="text-sm text-muted-foreground mb-1">Email directly</p>
                                <a href="mailto:syednajafturab@gmail.com" className="text-lg font-medium hover:text-primary transition-colors">
                                    syednajafturab@gmail.com
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl"
                    >
                        {status === "success" ? (
                            <div className="h-[400px] flex flex-col items-center justify-center text-center space-y-4">
                                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center">
                                    <CheckCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold">Message Sent!</h3>
                                <p className="text-muted-foreground">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="text-primary hover:underline text-sm"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium text-muted-foreground">Name</label>
                                        <input
                                            id="name"
                                            name="user_name" // EmailJS standard name
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-muted-foreground">Email</label>
                                        <input
                                            id="email"
                                            name="user_email" // EmailJS standard name
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all placeholder:text-muted-foreground/30"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all text-foreground"
                                    >
                                        <option value="Project Inquiry">Project Inquiry</option>
                                        <option value="Consultation">Consultation</option>
                                        <option value="Hiring">Hiring</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium text-muted-foreground">Message</label>
                                    <textarea
                                        id="message"
                                        name="message" // EmailJS standard name
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none placeholder:text-muted-foreground/30"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message <Send className="w-5 h-5" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
