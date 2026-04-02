import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageSquare } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">{t('contact.title')}</h2>
          <p className="text-muted-foreground text-base sm:text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
            <a href="mailto:team.luxcompany@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              team.luxcompany@gmail.com
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              Discord
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
