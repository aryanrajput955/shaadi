"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function FloatingElements() {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random styles only on client-side mount
    const generatedElements = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      width: Math.random() * 200 + 50,
      height: Math.random() * 200 + 50,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 10 + 10,
    }));
    setElements(generatedElements);
  }, []); // Empty dependency array ensures this runs once on mount

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-[#F49BAB]/10"
          style={{
            width: element.width,
            height: element.height,
            left: element.left,
            top: element.top,
          }}
          initial={{ opacity: 0.1, scale: 0 }}
          animate={{
            opacity: [0.05, 0.1, 0.05],
            scale: 1,
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}