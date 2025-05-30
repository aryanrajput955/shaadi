"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(heroScrollProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroScrollProgress, [0, 0.8], [1, 0.9]);
  const heroTextY = useTransform(heroScrollProgress, [0, 0.8], [0, 100]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/80 via-transparent to-pink-50/80 z-10" />
        <Image
          src="/images/service2.jpg"
          alt="Wedding couple"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div style={{ y: heroTextY }} className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-block bg-[#F49BAB]/10 text-[#EE3164] px-6 py-2 rounded-full text-sm font-medium mb-6"
          >
            NEW-AGE WEDDING PLANNERS
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Crafting Your <br />
            <span className="relative inline-block">
              <span className="relative z-10 text-[#EE3164]">Timeless</span>
              <motion.svg
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full h-3 z-0"
                viewBox="0 0 200 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5.5C32 1.5 62 1.5 101 5.5C140 9.5 170 9.5 199 5.5"
                  stroke="#F49BAB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </motion.svg>
            </span>{" "}
            Love Story
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            A wedding isn't just an event — it's a timeless memory in the making. Think of it as a grand production,
            where every detail matters.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button className="bg-[#F49BAB] hover:bg-[#F4A7B9] text-white px-8 py-7 rounded-full text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Start Your Journey
                <motion.span
                  initial={{ x: -5 }}
                  animate={{ x: 0 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, repeatType: "reverse" }}
                >
                  <ArrowRight className="h-5 w-5" />
                </motion.span>
              </span>
              <motion.span
                className="absolute inset-0 bg-[#F4A7B9]"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#F49BAB] text-[#F49BAB] hover:bg-[#F49BAB]/10 px-8 py-7 rounded-full text-lg"
            >
              View Our Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>

     

      <div className="absolute top-1/4 left-10 md:left-20 w-20 h-20 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
            y: [0, -10, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <Image
            src="/placeholder.svg?height=100&width=100"
            width={100}
            height={100}
            alt="Decorative element"
            className="opacity-30"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-1/4 right-10 md:right-20 w-16 h-16 opacity-20 pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, -360],
            y: [0, 10, 0],
          }}
          transition={{
            rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
            y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
          }}
        >
          <Image
            src="/placeholder.svg?height=80&width=80"
            width={80}
            height={80}
            alt="Decorative element"
            className="opacity-30"
          />
        </motion.div>
      </div>
    </section>
  );
}