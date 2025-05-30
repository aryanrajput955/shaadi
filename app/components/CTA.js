"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-[#F49BAB] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat opacity-5" />
      <div
        className="absolute top-0 left-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-full h-20 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0 100%)" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">Let's Begin Crafting Your Love Story</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Your gateway to forever starts with a conversation. Reach out to us and let's make your wedding dreams
            come true.
          </p>
          <Button className="bg-white text-[#F49BAB] hover:bg-pink-100 px-10 py-7 rounded-full text-lg font-medium group">
            <span className="flex items-center gap-2">
              Book Your Free Consultation
              <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}