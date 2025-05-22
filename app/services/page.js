'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { AnimatePresence,motion } from 'framer-motion';
// Array of image URLs - replace with your own images

export default function ServicesPage() {
const [currentImageIndex, setCurrentImageIndex] = useState(0);
const images = [
  '/images/service1.jpg',
  '/images/service2.jpg',
  '/images/service3.jpg',
  '/images/service4.jpg',
];
  // Preload images to ensure they are available
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      <div className="relative flex items-center justify-center font-sans  bg-cover bg-center text-white">
        <h1 
          className="text-6xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text select-none"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          SERVICES
        </h1>
      </div>
      <div>
        {/* Slide 1: Destination & Venues */}
        <div id='one' className="h-screen flex items-center justify-center bg-[url('/images/service4.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-1"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Destination & Venues
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  We scout and secure the perfect destination and venue for your wedding, ensuring a breathtaking backdrop that matches your vision, from exotic beaches to elegant ballrooms.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/service1.jpg"
                    alt="Destination & Venues"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 2: Budget Management */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service2.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-2"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Budget Management
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  Our expert planners help you manage your wedding budget effectively, ensuring every penny is spent wisely while delivering a luxurious experience within your means.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scope: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/budget.jpg"
                    alt="Budget Management"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 3: Vendor Management */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service3.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-3"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Vendor Management
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  We coordinate with top vendors, from florists to photographers, ensuring seamless collaboration and high-quality services tailored to your wedding needs.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/vendor.webp"
                    alt="Vendor Management"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 4: Food and Beverage */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/5.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0 gradient-slide-4"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Food and Beverage
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  Delight your guests with exquisite menus and beverage options, curated to reflect your taste, from gourmet dining to signature cocktails.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/food.jpeg"
                    alt="Food and Beverage"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 5: Hospitality & Guest Management */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service6.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-5"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Hospitality & Guest Management
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  We ensure your guests feel welcomed and cared for, managing accommodations, transportation, and personalized experiences for a memorable celebration.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/hosp.jpg"
                    alt="Hospitality & Guest Management"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 6: Logistics */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service7.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-6"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Logistics
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  From timelines to transportation, we handle all logistics with precision, ensuring your wedding day runs smoothly and stress-free.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/log.jpg"
                    alt="Logistics"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 7: Entertainment */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service8.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-7"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Entertainment
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  Create unforgettable moments with live bands, DJs, or cultural performances, tailored to keep your guests entertained throughout the event.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/ent.jpg"
                    alt="Entertainment"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 8: Invitations & Gifting */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service9.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-8"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Invitations & Gifting
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  We design elegant invitations and curate thoughtful gifts, ensuring every detail reflects your style and leaves a lasting impression on your guests.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/gift.jpg"
                    alt="Invitations & Gifting"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slide 9: Decor Management */}
        <div className="h-screen flex items-center justify-center bg-[url('/images/service10.jpg')] bg-cover bg-center text-white bg-no-repeat overflow-hidden m-4 md:m-16 relative">
          {/* Gradient Overlay for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F06292]/50 to-[#F4A7B9]/50 z-0  gradient-slide-9"></div>

          {/* Main Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center justify-center h-full">
              {/* Text Section with Animation */}
              <motion.div
                className="text-center mb-8 md:mb-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#F4A7B9] drop-shadow-lg">
                  Decor Management
                </h2>
                <p className="text-lg md:text-2xl max-w-lg mx-auto leading-relaxed text-white/90 drop-shadow-md">
                  Transform your venue with stunning decor, from floral arrangements to lighting, creating a magical ambiance that brings your dream wedding to life.
                </p>
                {/* Decorative Sparkle Element */}
                <div className="mt-6 flex justify-center">
                  <svg
                    className="w-16 h-16 text-[#F4A7B9] animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 12h2m5-7v2m5 5h2m-7 5v2m-4.5-10.5l1 1m7 0l-1-1m-6 6l-1-1m7 0l1 1"
                    />
                  </svg>
                </div>
              </motion.div>

              {/* Image Section with Overlap and Animation */}
              <motion.div
                className="relative w-full max-w-sm md:max-w-lg mt-8 md:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative w-full h-72 md:h-96 transform group">
                  {/* Main Image */}
                  <Image
                    src="/images/decor.jpg"
                    alt="Decor Management"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl shadow-2xl border-4 border-white/30 group-hover:border-[#F4A7B9] transition-all duration-300"
                  />
                  {/* Decorative Overlay Frame */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#F4A7B9]/20 rounded-full border-2 border-[#F4A7B9]/50 transform rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#F06292]/20 rounded-full border-2 border-[#F06292]/50 transform -rotate-45 group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}