import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Facebook, Instagram } from 'lucide-react';

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
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
            
            <a href="mailto:team.luxcompany@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base text-muted-foreground">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              Gmail
            </a>

            <a href="https://wa.me/261334234927" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base text-muted-foreground">
              {/* Lucide n'a pas d'icône WhatsApp, on utilise un SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L0 24l6.335-1.505A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.373l-.36-.214-3.724.885.916-3.618-.235-.372A9.818 9.818 0 1112 21.818z"/>
              </svg>
              WhatsApp
            </a>

            <a href="tel:+261334234927" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base text-muted-foreground">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              +261 33 42 349 27
            </a>

            <a href="https://facebook.com/profile.php?id=61554854878749" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base text-muted-foreground">
              <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              Facebook
            </a>

            <a href="https://instagram.com/team.luxcompany" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base text-muted-foreground">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              Instagram
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base text-muted-foreground">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
              Discord
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};