import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-8 mt-20">
            <div className="container mx-auto px-8 md:px-12 lg:px-20 flex flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} DevPortfolio. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="w-5 h-5" />
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-5 h-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
