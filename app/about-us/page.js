'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Array of image URLs - replace with your own images  
export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/service1.jpg',
    '/images/service2.jpg',
    '/images/service3.jpg',
    '/images/service4.jpg',
  ];

  // Team data
  const teamMembers = [
    {
      name: "Sarah Johnson",
      designation: "Founder & CEO",
      image: "/people1.webp",
      info: "With over 15 years of experience in relationship counseling, Sarah founded our platform with a vision to create meaningful connections and help souls find their perfect match."
    },
    {
      name: "Michael Chen",
      designation: "Head of Technology",
      image: "/people2.webp",
      info: "Michael leads our technical team with expertise in building secure platforms. He ensures our matching algorithms are both innovative and reliable for lasting connections."
    },
    {
      name: "Priya Sharma",
      designation: "Relationship Counselor",
      image: "/people3.webp",
      info: "Priya brings warmth and expertise to our counseling services. As a certified therapist, she guides members through their journey to finding lasting love."
    }
  ];

  // Gentle animation variants
  const gentleFadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.3
      }
    }
  };

  const softScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  // Preload images to ensure they are available   
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Animated Header with soft background */}
      <div className="relative flex items-center justify-center font-sans py-24 bg-gradient-to-b from-white/50 to-transparent">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/20 via-rose-100/30 to-orange-100/20"></div>
        <h1 
          className="relative text-6xl md:text-8xl lg:text-[10rem] font-black text-transparent bg-clip-text select-none"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          ABOUT US
        </h1>
      </div>

      {/* Vision Section */}
      <motion.section 
        className="px-8 md:px-16 lg:px-32 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={gentleFadeIn}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-600 mb-12 text-center tracking-wide"
            variants={gentleFadeIn}
          >
            Our Vision
          </motion.h2>
          <motion.div 
            className="relative rounded-3xl p-10 md:p-16 shadow-sm border border-white/60 backdrop-blur-sm overflow-hidden"
            style={{ backgroundColor: 'rgba(249, 207, 202, 0.3)' }}
            variants={softScale}
          >
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200/30 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-rose-200/30 to-transparent rounded-full translate-y-12 -translate-x-12"></div>
            
            <p className="text-lg md:text-xl leading-loose text-gray-600 text-center relative z-10 font-light">
              At the heart of our platform lies a simple yet profound belief: every soul deserves to find their perfect companion. We understand that marriage is a beautiful journey of shared dreams and values. Our vision is to create a nurturing space where authentic connections blossom into lifelong partnerships.
              <br /><br />
              Through thoughtful matchmaking and genuine care, we help hearts unite with understanding and respect, creating not just marriages, but legacies of love that inspire generations.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="px-8 md:px-16 lg:px-32 py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-600 mb-6 text-center tracking-wide"
            variants={gentleFadeIn}
          >
            Our Team
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-500 text-center mb-20 max-w-2xl mx-auto font-light"
            variants={gentleFadeIn}
          >
            Meet the caring souls dedicated to your journey of love
          </motion.p>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={staggerContainer}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="group text-center"
                variants={softScale}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="relative mb-8">
                  <div className="relative w-36 h-36 mx-auto mb-6">
                    {/* Soft glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-rose-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="relative rounded-full object-cover border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm border border-white/80 group-hover:shadow-md transition-all duration-700">
                  <h3 className="text-xl font-medium text-gray-700 mb-3">
                    {member.name}
                  </h3>
                  <div 
                    className="inline-block px-6 py-2 rounded-full text-sm text-gray-600 font-light mb-6 border border-pink-200/50"
                    style={{ backgroundColor: 'rgba(249, 207, 202, 0.4)' }}
                  >
                    {member.designation}
                  </div>
                  <p className="text-gray-500 leading-relaxed text-sm font-light">
                    {member.info}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}