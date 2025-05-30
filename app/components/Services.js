'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Services() {
  const servicesRef = useRef(null);
  const { scrollYProgress: servicesScrollProgress } = useScroll({
    target: servicesRef,
    offset: ['start end', 'end start'],
  });
  const servicesParallax = useTransform(servicesScrollProgress, [0, 1], [0, -40]);

  const servicesData = [
    {
      title: 'Destination & Venues',
      description:
        'We handpick breathtaking venues and destinations, managing every detail to create a stunning backdrop for your dream wedding.',
      image: '/images/service3.jpg',
      color: '#F49BAB',
      delay: 0,
    },
    {
      title: 'Budget Management',
      description:
        'Our expert team crafts a tailored budget plan, optimizing costs and negotiating with vendors to ensure your vision fits your financial goals.',
      image: '/images/budget.jpg',
      color: '#F4A7B9',
      delay: 0.1,
    },
    {
      title: 'Hospitality & Guest Management',
      description:
        'From travel arrangements to personalized guest services, we ensure your guests enjoy a seamless and memorable wedding experience.',
      image: '/images/service6.jpg',
      color: '#F49BAB',
      delay: 0.2,
    },
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-16 md:py-24 bg-gradient-to-b from-pink-50 to-white relative overflow-hidden"
    >
      <motion.div
        style={{ y: servicesParallax }}
        className="absolute top-0 left-0 w-full h-32 bg-[url('/placeholder.svg?height=80&width=2000')] bg-repeat-x opacity-5"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="inline-block bg-[#F49BAB]/20 text-[#F49BAB] px-4 py-1 rounded-full text-sm font-bold mb-4">
            OUR SERVICES
          </div>
          <h2 className=" text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Your Wedding, <span className="text-[#F49BAB]">Perfected</span>
          </h2>
          <p className="text-base text-gray-700 max-w-xl mx-auto">
            Tailored services to bring your love story to life with elegance and precision.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={`${service.title} image`}
                  fill
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${service.color}80, transparent)` }}
                />
              </div>
              <div className="p-6 flex flex-col text-center">
                <h3 className=" text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <Button className="mt-auto bg-[#F49BAB] text-white hover:bg-[#F4A7B9] transition-colors duration-300 font-semibold py-2 rounded-lg">
                  Discover More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-[#F49BAB] hover:bg-[#F4A7B9] text-white px-8 py-3 rounded-full text-base font-bold">
            View All Services
          </Button>
        </motion.div>
      </div>
    </section>
  );
}