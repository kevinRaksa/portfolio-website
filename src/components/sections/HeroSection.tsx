"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Available for opportunities
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 mb-4"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-500 dark:text-neutral-400 mb-6"
        >
          {profile.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {profile.bio}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          
            href="#projects"
            className="px-6 py-3 rounded-full bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 text-sm font-medium hover:opacity-80 transition-opacity"
          >
            View Projects
          </a>
          
            href="#contact"
            className="px-6 py-3 rounded-full border border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex items-center justify-center gap-6"
        >
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <Github size={20} />
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
            <Mail size={20} />
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-neutral-400"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
