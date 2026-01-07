import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

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
          <form className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="relative">
                <Input
                  placeholder={t('contact.name')}
                  className="h-12 pl-4 bg-card border-border focus:border-primary"
                />
              </div>
              <div className="relative">
                <Input
                  type="email"
                  placeholder={t('contact.email')}
                  className="h-12 pl-4 bg-card border-border focus:border-primary"
                />
              </div>
            </div>
            <div className="relative">
              <Textarea
                placeholder={t('contact.message')}
                rows={5}
                className="resize-none bg-card border-border focus:border-primary"
              />
            </div>
            <Button size="lg" className="w-full group shadow-glow">
              {t('contact.send')}
              <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-muted-foreground">
            <a href="mailto:contact@luxcompany.mg" className="flex items-center gap-2 hover:text-primary transition-colors text-sm sm:text-base">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              contact@luxcompany.mg
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
