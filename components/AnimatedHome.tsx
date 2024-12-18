"use client"


import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AnimatedHeroSection = () => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const heroTexts = [
        "Build Beautiful Flutter Widgets",
        "Create Stunning Mobile Interfaces",
        "Innovate with Flutter Technology",
        "Design Responsive Applications"
    ];

    useEffect(() => {
        const textCycleInterval = setInterval(() => {
            setCurrentTextIndex((prevIndex) =>
                (prevIndex + 1) % heroTexts.length
            );
        }, 5000);

        return () => clearInterval(textCycleInterval);
    }, []);

    // Mathematical grid background
    const generateGridBackground = () => {
        const gridItems = [];
        for (let i = 0; i < 200; i++) {
            gridItems.push(
                <motion.div
                    key={i}
                    className="border border-white/20 bg-transparent"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: [0, 0.2, 0],
                        scale: [0.9, 1, 0.9]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        repeatType: 'loop',
                        delay: Math.random() * 2
                    }}
                />
            );
        }
        return gridItems;
    };

    return (
        <div className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
            {/* White Bordered Grid Background */}
            <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-1">
                {generateGridBackground()}
            </div>

            {/* Dark Overlay to improve text visibility */}
            <div className="absolute inset-0 bg-black/70 pointer-events-none" />

            {/* Hero Content */}
            <div className="relative z-10 text-center max-w-4xl px-4 w-full">
                <motion.div
                    key={currentTextIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                        duration: 0.8,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="mb-6"
                >
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        {heroTexts[currentTextIndex]}
                        <motion.span
                            animate={{ opacity: [0, 1] }}
                            transition={{
                                repeat: Infinity,
                                duration: 0.5,
                                repeatType: 'reverse'
                            }}
                            className="inline-block ml-1 bg-white w-2 h-6 md:h-8"
                        />
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-base md:text-xl text-gray-300 mb-8"
                >
                    Crafting elegant and performant Flutter widgets with mathematical precision
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex justify-center space-x-4"
                >
                    <Button
                        variant="default"
                        size="lg"
                        className="shadow-lg bg-white/10 hover:bg-white/20 text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                        Sign In
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="text-white border-white/30 hover:bg-white/10"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L14.586 11H7a1 1 0 110-2h7.586l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Sign Out
                    </Button>
                </motion.div>
            </div>

            {/* GitHub Link */}
            <Link
                href="https://github.com/your-flutter-project"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50"
            >
                <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full w-12 h-12 bg-white/10 hover:bg-white/20 border-white/30"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </Button>
            </Link>
        </div>
    );
};

export default AnimatedHeroSection;