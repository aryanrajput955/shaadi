"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Calendar, Users, MapPin, Star } from "lucide-react";

export default function About() {
  const aboutRef = useRef(null);
  const { scrollYProgress: aboutScrollProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"],
  });
  const aboutParallax = useTransform(aboutScrollProgress, [0, 1], [0, -100]);

  return (
    <section id="about" ref={aboutRef} className="py-20 md:py-32 bg-white relative overflow-hidden">
      <motion.div
        style={{ y: aboutParallax }}
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#F49BAB]/5 pointer-events-none"
      />
      <motion.div
        style={{ y: aboutParallax }}
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#F49BAB]/5 pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/service1.jpg"
                alt="Wedding planning"
                width={600}
                height={800}
                className="object-cover w-full h-[500px]"
              />
            </div>
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#F49BAB] rounded-2xl z-0" />

            <div className="absolute -bottom-10 -right-10 bg-white p-4 rounded-lg shadow-xl z-20 max-w-xs">
              <div className="flex items-center gap-2 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400" fill="#FACC15" />
                ))}
              </div>
              <p className="text-sm text-gray-700 italic">
                "They made our dream wedding a reality. Every detail was perfect!"
              </p>
              <p className="text-xs text-[#F49BAB] mt-2 font-medium">— Sarah & Michael</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-block bg-[#F49BAB]/10 text-[#F49BAB] px-4 py-1 rounded-full text-sm font-medium">
              OUR STORY
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Behind the Scenes <span className="text-[#F49BAB]">Magic</span>
            </h2>

            <div className="w-20 h-1 bg-[#F49BAB]" />

            <p className="text-lg text-gray-700 leading-relaxed">
              Behind the scenes, Knot & Journey works like clockwork — ensuring every moment flows seamlessly and
              every detail is just right. From the tiniest flower petal to the final dance move, we make sure nothing
              is out of place.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              No challenge is too big, no detail too small. We're here to manage it all — calmly, creatively, and
              passionately.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-[#F49BAB]/10 p-3 rounded-full">
                  <Heart className="h-5 w-5 text-[#F49BAB]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Passionate Planning</h3>
                  <p className="text-sm text-gray-600">We pour our hearts into every detail</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#F49BAB]/10 p-3 rounded-full">
                  <Calendar className="h-5 w-5 text-[#F49BAB]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Seamless Execution</h3>
                  <p className="text-sm text-gray-600">Flawless coordination from start to finish</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#F49BAB]/10 p-3 rounded-full">
                  <Users className="h-5 w-5 text-[#F49BAB]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Personalized Touch</h3>
                  <p className="text-sm text-gray-600">Your unique story guides every decision</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-[#F49BAB]/10 p-3 rounded-full">
                  <MapPin className="h-5 w-5 text-[#F49BAB]" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Destination Experts</h3>
                  <p className="text-sm text-gray-600">Creating magic anywhere in the world</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}