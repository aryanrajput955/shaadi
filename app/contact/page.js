'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function ContactPage() {
  const [eventType, setEventType] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    partnerName: '',
    email: '',
    partnerEmail: '',
    phone: '',
    eventType: '',
    otherEvent: '',
    guests: '',
    weddingMonthYear: '',
    weddingDate: '',
    location: '',
    nights: '',
    itinerary: '',
    vendors: '',
    budget: '',
    about: '',
    referral: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEventTypeChange = (e) => {
    setEventType(e.target.value);
    setFormData({ ...formData, eventType: e.target.value, otherEvent: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <>
      <Head>
        <title>Contact Us - Matrimonial Planner</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-6"
        style={{
          backgroundImage: ` url('/contactbg.jpg')`
        }}>
        <motion.div
          className="max-w-3xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-10 border border-[#F4A7B9]/30"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-4xl font-extrabold text-gray-800 mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#EE3164] to-[#F4A7B9]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-gray-600 text-center mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            We're here to help you plan your dream celebration. Share your vision with us, and our team will craft a personalized experience that makes your special day unforgettable.
          </motion.p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-gray-800 font-semibold mb-2 after:content-['*'] after:text-[#EE3164] after:ml-1">
                Your Full Name
              </label>
              <motion.input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2 after:content-['*'] after:text-[#EE3164] after:ml-1">
                Partner's Full Name
              </label>
              <motion.input
                type="text"
                name="partnerName"
                value={formData.partnerName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2 after:content-['*'] after:text-[#EE3164] after:ml-1">
                Your Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2 after:content-['*'] after:text-[#EE3164] after:ml-1">
                Partner's Email
              </label>
              <motion.input
                type="email"
                name="partnerEmail"
                value={formData.partnerEmail}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2 after:content-['*'] after:text-[#EE3164] after:ml-1">
                Phone Number
              </label>
              <motion.input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2 after:content-['*'] after:text-[#EE3164] after:ml-1">
                Type of Event
              </label>
              <div className="space-y-3">
                {['Wedding', 'Engagement', 'Milestone Celebration', 'Other'].map((type) => (
                  <motion.label
                    key={type}
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="radio"
                      name="eventType"
                      value={type}
                      checked={eventType === type}
                      onChange={handleEventTypeChange}
                      required
                      className="appearance-none w-6 h-6 border-2 border-[#F4A7B9] rounded-full checked:bg-[#EE3164] checked:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all"
                    />
                    <span className="text-gray-700 font-medium">{type}</span>
                  </motion.label>
                ))}
              </div>
              <AnimatePresence>
                {eventType === 'Other' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <input
                      type="text"
                      name="otherEvent"
                      value={formData.otherEvent}
                      onChange={handleChange}
                      placeholder="Please specify"
                      className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Expected Number of Guests</label>
              <motion.input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Tentative Month & Year of Wedding</label>
              <div className="space-y-3">
                {['June 2025', 'December 2025', 'June 2026', 'December 2026', 'Other'].map((month) => (
                  <motion.label
                    key={month}
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="radio"
                      name="weddingMonthYear"
                      value={month}
                      checked={formData.weddingMonthYear === month}
                      onChange={handleChange}
                      className="appearance-none w-6 h-6 border-2 border-[#F4A7B9] rounded-full checked:bg-[#EE3164] checked:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all"
                    />
                    <span className="text-gray-700 font-medium">{month}</span>
                  </motion.label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Date of Wedding (if finalized)</label>
              <motion.input
                type="date"
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Preferred Location or Venues</label>
              <motion.input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Number of Nights</label>
              <div className="space-y-3">
                {['1', '2', '3', '4 & Above'].map((night) => (
                  <motion.label
                    key={night}
                    className="flex items-center gap-3 cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="radio"
                      name="nights"
                      value={night}
                      checked={formData.nights === night}
                      onChange={handleChange}
                      className="appearance-none w-6 h-6 border-2 border-[#F4A7B9] rounded-full checked:bg-[#EE3164] checked:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all"
                    />
                    <span className="text-gray-700 font-medium">{night}</span>
                  </motion.label>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Functions or Itinerary</label>
              <motion.textarea
                name="itinerary"
                value={formData.itinerary}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Any Vendors Booked or In Mind</label>
              <motion.textarea
                name="vendors"
                value={formData.vendors}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Estimated Budget of the Wedding</label>
              <motion.input
                type="text"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">Tell Us a Little Bit About Yourselves</label>
              <motion.textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <div>
              <label className="block text-gray-800 font-semibold mb-2">How Did You Hear About Us?</label>
              <motion.select
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:border-[#EE3164] focus:outline-none focus:ring-2 focus:ring-[#F4A7B9]/50 transition-all bg-gray-50"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <option value="">Select an option</option>
                <option value="Social Media">Social Media</option>
                <option value="Friend/Family">Friend/Family</option>
                <option value="Search Engine">Search Engine</option>
                <option value="Advertisement">Advertisement</option>
                <option value="Other">Other</option>
              </motion.select>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#EE3164] to-[#F4A7B9] text-white p-4 rounded-xl hover:from-[#D92A56] hover:to-[#E896A9] transition-all shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 25px rgba(238, 49, 100, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              Submit Your Dream Plan
            </motion.button>
          </form>
        </motion.div>
      </div>
    </>
  );
}