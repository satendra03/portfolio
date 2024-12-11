import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const FontDraggableText = ({ words, className = "", size }) => {
  const fonts = [
    "font-pop font-bold italic", // Poppins, bold, and italic
    "font-int font-light", // Inter, light
    "font-mono font-bold", // Noto Sans Mono, bold
    "font-notoSans font-medium", // Noto Sans Display, medium
    "font-tinos font-extrabold", // Tinos, extra-bold
    "font-playfair font-black", // Playfair, black (heaviest weight)
    "font-publicSans font-semibold", // Public Sans, semi-bold
    "font-anton uppercase font-bold", // Anton SC, bold, and uppercase
    "font-yugi font-medium italic", // Yuji Mai, medium, and italic
    "font-jaro font-thin", // Jaro, thin
  ];

  return (
    <>
      {words.map((word, index) => (
        <div key={index} className={cn("flex items-center justify-center", className)}>
          {word.split("").map((letter, letterIndex) => {
            const fontClass = fonts[letterIndex % fonts.length];
            return (
              <motion.h1
                key={letterIndex}
                drag
                dragElastic={0.8}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
                className={cn(
                  "text-7xl hover:cursor-grab active:cursor-grabbing uppercase shadow-lg",
                  fontClass, size
                )}
              >
                {letter}
              </motion.h1>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default FontDraggableText;
