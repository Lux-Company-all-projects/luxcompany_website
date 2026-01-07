import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm sm:text-base">L</span>
            </div>
            <span className="font-semibold text-sm sm:text-base text-foreground">Lux Company</span>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1">
            {t('footer.madeWith')} <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary fill-primary" /> Madagascar
          </p>

          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Lux Company. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
