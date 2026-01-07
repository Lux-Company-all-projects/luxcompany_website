import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { MobileNavigation } from './MobileNavigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Logo />
          <Navigation />
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
            <MobileNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
