import { useTranslation } from 'react-i18next';
import { Heart } from 'lucide-react';
import img_logo from '@/assets/lux_company_logo.png'

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
              <img
                    src={img_logo}
                    alt="Lux Company Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center object-contain"
                  />
            <span className="font-semibold text-sm sm:text-base text-foreground">Lux Company</span>
          </div>

      

          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Lux Company. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};
