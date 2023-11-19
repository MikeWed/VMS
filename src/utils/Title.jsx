import React from 'react'
import {motion} from "framer-motion"
import '../index.scss'

export default function Title({text}) {

const letters = Array.from(text);
const layoutId = "animated-title";

  const container = {
    hidden: { opacity: 0, x: 0, y: 0 },
    visible: () => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: { staggerChildren: .05, delayChildren: 0.1, staggerDirection: 1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
      // x: 200,
    },
  };

  return (
    <motion.h1
      style={{ display: "flex", justifyContent: "center"}}
      variants={container}
      initial="hidden"
      whileInView="visible"
      layout
      layoutId={layoutId} // Assign the unique layoutId
    >
      
      {letters.map((letter, index) => (
        <motion.span 
          variants={child} 
          className='title-letter' 
          key={index}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
