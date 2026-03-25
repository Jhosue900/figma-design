import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const ScrollReveal = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Empieza invisible y un poco abajo
      whileInView={{ opacity: 1, y: 0 }} // Se activa al entrar en el viewport
      viewport={{ once: true, margin: "-100px" }} // Se activa una sola vez
      transition={{ 
        duration: 0.8, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Beizer curvo para fluidez profesional
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;