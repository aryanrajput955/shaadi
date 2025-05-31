'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function Gallery() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="pt-16 pb-20 sm:pt-24 sm:pb-32 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Animated Text Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <div className="inline-block bg-[#F49BAB]/10 text-[#F49BAB] px-4 py-1 rounded-full text-sm font-medium mb-4">
                OUR PORTFOLIO
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Moments We've <span className="text-[#F49BAB]">Crafted</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 mb-6">
                A glimpse into the beautiful weddings we've had the honor to plan and the magical moments we've helped create. From intimate ceremonies under the stars to grand celebrations filled with joy and laughter, each event is a reflection of our couple’s unique love story. With every floral arrangement, every detail curated, and every vow exchanged, we've turned dreams into timeless memories.
              </p>
              <Button className="bg-[#F49BAB] hover:bg-[#F4A7B9] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg group relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  View Gallery
                  <motion.span
                    initial={{ x: -5 }}
                    animate={{ x: 0 }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, repeatType: "reverse" }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </span>
              </Button>
            </motion.div>

            {/* Right Decorative Image Grid */}
            <div className="relative">
              <div className="lg:static transform lg:translate-x-0">
                <div className="hidden lg:flex items-center space-x-6 lg:space-x-8">
                  {/* Desktop 3-column layout */}
                  {/* Column 1 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      <Image
                        src="/images/bg1.jpeg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src="/images/bg2.jpg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* Column 2 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src="/images/bg3.jpg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src="/images/bg4.jpg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src="/images/bg5.jpg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {/* Column 3 */}
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src="/images/bg6.jpg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      <Image
                        src="/images/bg7.jpg"
                        alt=""
                        width={176}
                        height={256}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile/Tablet stacked layout */}
                <div className="flex lg:hidden flex-wrap justify-center gap-4 mt-8">
                  {[
                    '/images/bg1.jpeg',
                    '/images/bg2.jpg',
                    '/images/bg3.jpg',
                    '/images/bg4.jpg',
                    '/images/bg5.jpg',
                    '/images/bg6.jpg',
                    '/images/bg7.jpg',
                  ].map((src, idx) => (
                    <div
                      key={idx}
                      className="h-56 w-36 sm:h-64 sm:w-40 overflow-hidden rounded-lg"
                    >
                      <Image
                        src={src}
                        alt={`Gallery image ${idx + 1}`}
                        width={160}
                        height={224}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}
