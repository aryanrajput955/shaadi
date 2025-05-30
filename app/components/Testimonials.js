"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Heart } from "lucide-react";

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Knot & Journey created the wedding of our dreams. Every detail was perfect, and we didn't have to worry about a thing on our big day. They truly made magic happen!",
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from couples whose wedding dreams we've turned into reality.
          </p>
        </motion.div>

        <div className="relative">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 -translate-x-1/2 -translate-y-1/2 bg-[#F49BAB]/10 rounded-full" />
            <div className="absolute bottom-0 right-0 w-60 h-60 translate-x-1/3 translate-y-1/3 bg-[#F49BAB]/10 rounded-full" />

            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                      alt={testimonials[activeTestimonial].couple}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#F49BAB] text-white p-2 rounded-full">
                    <Heart className="h-4 w-4" fill="white" />
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-6 w-6 text-yellow-400" fill="#FACC15" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-gray-700 italic mb-8 leading-relaxed">
                    "{testimonials[activeTestimonial].quote}"
                  </p>

                  <h3 className="font-serif text-xl font-bold text-[#F49BAB] mb-1">
                    {testimonials[activeTestimonial].couple}
                  </h3>
                  <p className="text-gray-600">{testimonials[activeTestimonial].location}</p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center mt-10">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
                      activeTestimonial === index ? "bg-[#F49BAB] scale-125" : "bg-gray-300"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}