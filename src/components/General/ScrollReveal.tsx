import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right"; // Añadimos dirección para dinamismo
}

const ScrollReveal = ({ children, delay = 0, direction = "up" }: Props) => {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }} // Activación más precisa
      transition={{ 
        duration: 1.2, // Aumentamos duración para suavidad
        delay: delay, 
        ease: [0.16, 1, 0.3, 1] // Quint Ease-Out para efecto premium
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;