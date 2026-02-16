import React from 'react';
import { motion } from 'framer-motion';

const CommandText = ({ text, delay = 0, className = "" }) => {
  // Splitting text into individual characters for the stagger effect
  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Speed of typing
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`font-mono flex flex-wrap ${className}`}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      {/* Animated Cursor */}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="ml-1 w-2 h-4 bg-terminal-accent inline-block self-center"
      />
    </motion.div>
  );
};

export default CommandText;