"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block bg-[#F49BAB]/10 text-[#F49BAB] px-4 py-1 rounded-full text-sm font-medium mb-4">
            GET IN TOUCH
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Contact <span className="text-[#F49BAB]">Us</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to start planning your perfect day? We'd love to hear from you and discuss how we can make your
            wedding dreams come true.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-start gap-6">
              <div className="bg-[#F49BAB]/10 p-4 rounded-full">
                <Phone className="h-6 w-6 text-[#F49BAB]" />
              </div>
              <div>
                <h3 className="font-medium text-xl text-gray-800 mb-2">Call Us</h3>
                <p className="text-gray-600 mb-1">We're available Monday-Friday, 9am-6pm</p>
                <p className="text-lg font-medium text-[#F49BAB]">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-[#F49BAB]/10 p-4 rounded-full">
                <Mail className="h-6 w-6 text-[#F49BAB]" />
              </div>
              <div>
                <h3 className="font-medium text-xl text-gray-800 mb-2">Email Us</h3>
                <p className="text-gray-600 mb-1">We'll respond within 24 hours</p>
                <p className="text-lg font-medium text-[#F49BAB]">hello@knotandjourney.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="bg-[#F49BAB]/10 p-4 rounded-full">
                <MapPin className="h-6 w-6 text-[#F49BAB]" />
              </div>
              <div>
                <h3 className="font-medium text-xl text-gray-800 mb-2">Visit Us</h3>
                <p className="text-gray-600 mb-1">Our office is open for appointments</p>
                <p className="text-lg font-medium text-[#F49BAB]">
                  123 Wedding Lane, Suite 101
                  <br />
                  Celebration City, CA 90210
                </p>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="font-medium text-xl text-gray-800 mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="bg-[#F49BAB]/10 p-4 rounded-full text-[#F49BAB] hover:bg-[#F49BAB] hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="bg-[#F49BAB]/10 p-4 rounded-full text-[#F49BAB] hover:bg-[#F49BAB] hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="bg-[#F49BAB]/10 p-4 rounded-full text-[#F49BAB] hover:bg-[#F49BAB] hover:text-white transition-colors"
                >
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#F49BAB] rounded-2xl z-0" />
            <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10">
              <h3 className="font-serif text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      id="first-name"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F49BAB] focus:border-transparent"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      id="last-name"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F49BAB] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F49BAB] focus:border-transparent"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F49BAB] focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="wedding-date" className="block text-sm font-medium text-gray-700">
                    Wedding Date (if known)
                  </label>
                  <input
                    id="wedding-date"
                    type="date"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F49BAB] focus:border-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Tell Us About Your Vision
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#F49BAB] focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#F49BAB] hover:bg-[#F4A7B9] text-white py-4 rounded-lg text-lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}