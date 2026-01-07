import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const navItems = [
  { key: 'home', href: '#home' },
  { key: 'projects', href: '#projects' },
  { key: 'team', href: '#team' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
];

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
      {navItems.map((item) => (
        <motion.a
          key={item.key}
          href={item.href}
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          whileHover={{ y: -2 }}
        >
          {t(`nav.${item.key}`)}
        </motion.a>
      ))}
    </nav>
  );
};