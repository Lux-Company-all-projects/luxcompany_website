import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';


export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium text-sm mb-2 block">{t('about.subtitle')}</span>
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 text-foreground">{t('about.title')}</h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
              {t('about.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-6 sm:p-8">
              <div className="w-full h-full rounded-xl bg-card border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-2xl sm:text-3xl">L</span>
                  </div>
                  <p className="text-lg sm:text-xl font-semibold text-foreground">Lux Company</p>
                  <p className="text-sm text-muted-foreground mt-1">Madagascar 🇲🇬</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -left-4 w-28 h-28 sm:w-32 sm:h-32 bg-accent/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
