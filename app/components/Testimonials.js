"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [centerIndex, setCenterIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: initial, 1: right, -1: left

  const testimonials = [
    {
      quote:
        "Knot & Journey created the wedding of our dreams. Every detail was perfect, and we didn&apos;t have to worry about a thing on our big day. They truly made magic happen!",
      couple: "Sarah & Michael",
      image: "/people1.webp",
      location: "Beachside Wedding, Malibu",
    },
    {
      quote:
        "Working with this team was the best decision we made. They understood our vision perfectly and executed it beyond our expectations. Our guests are still talking about it!",
      couple: "Emma & James",
      image: "/people3.webp",
      location: "Garden Ceremony, Napa Valley",
    },
    {
      quote:
        "Our destination wedding seemed impossible to plan, but they made it seamless. Every detail was handled with care and creativity. It was truly the perfect day.",
      couple: "Priya & Raj",
      image: "/people2.webp",
      location: "Palace Wedding, Udaipur",
    },
    {
      quote:
        "The team transformed our vision into a breathtaking reality. Their attention to detail and passion for perfection made our day unforgettable.",
      couple: "Liam & Olivia",
      image: "/people4.webp",
      location: "Vineyard Wedding, Tuscany",
    },
    {
      quote:
        "From start to finish, they handled everything with grace and professionalism. Our wedding was a fairytale come true, thanks to their expertise.",
      couple: "Ava & Noah",
      image: "/people5.webp",
      location: "Castle Wedding, Scotland",
    },
    {
      quote:
        "Their creativity and dedication turned our simple ideas into a spectacular celebration. We couldn&apos;t have asked for a better experience!",
      couple: "Isabella & Ethan",
      image: "/people6.webp",
      location: "Rooftop Wedding, New York",
    },
  ];

  const handlePrev = () => {
    setDirection(-1);
    setCenterIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCenterIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=2000')] bg-repeat opacity-5" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block bg-[#F49BAB]/10 text-[#F49BAB] px-4 py-1 rounded-full text-sm font-medium mb-4">
            TESTIMONIALS
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Love Stories We've <span className="text-[#F49BAB]">Helped Write</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from couples whose wedding dreams we've turned into reality.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={handlePrev}
              className="absolute left-0 md:-left-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[#F49BAB] hover:text-white transition-colors z-20"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex justify-center items-stretch gap-4 w-full overflow-hidden">
              {/* Mobile - Only show center testimonial */}
              <div className="md:hidden w-full">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={centerIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-[#F49BAB] w-full"
                  >
                    <TestimonialCard testimonial={testimonials[centerIndex]} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Desktop - Show three testimonials */}
              <div className="hidden md:flex justify-center items-stretch gap-6 w-full">
                {[
                  (centerIndex - 1 + testimonials.length) % testimonials.length,
                  centerIndex,
                  (centerIndex + 1) % testimonials.length,
                ].map((index, position) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: position === 1 ? 1 : 0.8, scale: position === 1 ? 1 : 0.9 }}
                    animate={{ opacity: position === 1 ? 1 : 0.8, scale: position === 1 ? 1 : 0.9 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className={`bg-white rounded-2xl shadow-xl p-6 md:p-8 ${
                      position === 1 ? "border-2 border-[#F49BAB] w-[40%]" : "w-[30%]"
                    }`}
                  >
                    <TestimonialCard testimonial={testimonials[index]} />
                  </motion.div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute right-0 md:-right-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-[#F49BAB] hover:text-white transition-colors z-20"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.couple}
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#F49BAB] text-white p-2 rounded-full">
            <Heart className="h-4 w-4" fill="white" />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400" fill="#FACC15" />
        ))}
      </div>

      <p className="text-lg md:text-xl text-gray-700 italic mb-6 leading-relaxed">
        "{testimonial.quote}"
      </p>

      <h3 className="font-serif text-lg font-bold text-[#F49BAB] mb-1">
        {testimonial.couple}
      </h3>
      <p className="text-gray-600 text-sm">{testimonial.location}</p>
    </>
  );
}