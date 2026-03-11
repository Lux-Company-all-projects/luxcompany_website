import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.a
      href="#home"
      className="flex items-center gap-2 sm:gap-3"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img 
        src="@/src/assets/lux_company_logo.png" 
        alt="Lux Company Logo"
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
      />
      <span className="font-semibold text-base sm:text-lg text-foreground">Lux Company</span>
    </motion.a>
  );
};