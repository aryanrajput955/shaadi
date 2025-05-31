'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/service1.jpg',
    '/images/service2.jpg',
    '/images/service3.jpg',
    '/images/service4.jpg',
  ];

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

  const floatingAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500); // Restored to original 500ms interval for faster transition

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Original Animated Header - Restored Exactly */}
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

      {/* Our Goal Section */}
      <motion.section 
        className="px-8 md:px-16 lg:px-32 py-20 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        {/* Decorative floating elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-pink-200/30 blur-xl"
          variants={floatingAnimation}
        />
        <motion.div 
          className="absolute bottom-1/3 right-20 w-24 h-24 rounded-full bg-rose-200/30 blur-xl"
          variants={floatingAnimation}
          transition={{ delay: 0.5 }}
        />
        
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-light text-gray-600 mb-12 text-center tracking-wide"
            variants={gentleFadeIn}
          >
            Our Goal
          </motion.h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative h-96 rounded-3xl overflow-hidden shadow-lg"
              variants={softScale}
            >
              <Image
                src="/images/bg8.jpg"
                alt="Happy couple"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-medium mb-2">Creating Lasting Bonds</h3>
                <p className="font-light">We measure our success by the happiness we help create</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-8"
              variants={staggerContainer}
            >
              <motion.div 
                className="flex items-start gap-6"
                variants={gentleFadeIn}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-pink-100/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Holistic Compatibility</h3>
                  <p className="text-gray-600 font-light">
                    To go beyond surface-level matching by considering emotional, intellectual, and spiritual compatibility in our pairing algorithms.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-6"
                variants={gentleFadeIn}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-pink-100/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Safe Environment</h3>
                  <p className="text-gray-600 font-light">
                    To maintain the highest standards of privacy and security, ensuring our members feel completely safe in their search for love.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start gap-6"
                variants={gentleFadeIn}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-pink-100/50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium text-gray-700 mb-2">Authentic Connections</h3>
                  <p className="text-gray-600 font-light">
                    To foster genuine relationships by encouraging vulnerability, honest communication, and meaningful interactions from the very beginning.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="px-8 md:px-16 lg:px-32 py-20 bg-gradient-to-b from-white/50 to-transparent"
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