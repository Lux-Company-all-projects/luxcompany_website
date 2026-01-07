# Lux Company Portfolio


## Features

- **Multi-language Support**: English, French, and Malagasy
- **Dark/Light Theme**: Automatic theme switching with user preference persistence
- **Responsive Design**: Mobile-first approach with smooth animations
- **Modern UI**: Built with shadcn/ui and Tailwind CSS
- **Type-Safe**: Full TypeScript implementation
- **Performance Optimized**: Fast builds with Vite

## Quick Start

### Prerequisites

- Node.js 18+
- Bun package manager (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd repository-cloned

# Install dependencies
bun install
# or
npm install
# or 
yarn install
```

### Development

```bash
# Start development server
bun run dev
# or
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Build the application
bun run build
# or
npm run build

# Preview production build
bun run preview
# or
npm run preview
```

## Project Structure

**src/components/**
- ui/ - shadcn/ui components (Button, Card, etc.)
- AppProviders.tsx - Provider setup (Query, Tooltip)
- AppRoutes.tsx - React Router configuration
- Header.tsx - Main header component
- Logo.tsx - Company logo
- Navigation.tsx - Desktop navigation
- MobileNavigation.tsx - Mobile navigation with hamburger menu
- LanguageSwitcher.tsx - Language selector
- ThemeToggle.tsx - Dark/light theme toggle
- HeroSection.tsx - Landing page hero section
- ProjectsSection.tsx - Projects showcase
- TeamSection.tsx - Team members display
- AboutSection.tsx - About section
- ContactSection.tsx - Contact information
- Footer.tsx - Site footer

**src/data/**
- projects.ts - Project data
- team.ts - Team member data

**src/hooks/**
- useTheme.ts - Theme management
- use-mobile.tsx - Mobile detection

**src/i18n/**
- index.ts - i18next configuration
- translations.ts - Translation files

**src/lib/**
- utils.ts - General utilities (cn, etc.)

**src/pages/**
- Index.tsx - Main landing page
- NotFound.tsx - 404 page

**Main Files**
- src/App.tsx - Main App component
- src/App.css - Global styles
- src/index.css - CSS variables and imports
- src/main.tsx - Application entry point

### **What to create in each folder:**

- **`components/`** : React components (.tsx)
- **`components/ui/`** : UI library components (shadcn/ui)
- **`data/`** : TypeScript data files (.ts)
- **`hooks/`** : Custom hooks (.ts or .tsx)
- **`i18n/`** : Configuration and translations (.ts)
- **`lib/`** : Fonctions utilitaires (.ts)
- **`pages/`** : Composants de pages (.tsx)

## Architecture Principles

### Single Responsibility Principle

Each file has **one clear responsibility**:

- **Components**: Focus on UI rendering only
- **Data files**: Contain static data and TypeScript interfaces
- **Hooks**: Handle specific logic (theme, mobile detection)
- **Utils**: Provide reusable utility functions

### Component Organization

Components are organized by responsibility:

```typescript
// Good: Single responsibility
export const Logo = () => {
  return <motion.a href="#home">...</motion.a>;
};

// Bad: Multiple responsibilities
export const Header = () => {
  // Logo, navigation, language, theme, mobile menu...
};
```

### Data Separation

Static data is separated from components:

```typescript
// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  image: string;
  downloadUrl: string;
  type: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 'dago-life',
    title: 'DAGO LIFE',
    // ...
  }
];

// src/components/ProjectsSection.tsx
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  return (
    <div>
      {projects.map(project => (
        // Render project
      ))}
    </div>
  );
};
```

## Styling Guidelines

### Tailwind CSS + shadcn/ui

- Use Tailwind utility classes
- Leverage shadcn/ui components for consistency
- Use CSS variables for theming
- Follow the design system colors and spacing

### Utility Function

Use the `cn()` utility for conditional classes:

```typescript
import { cn } from '@/lib/utils';

<div className={cn(
  "base-classes",
  condition && "conditional-classes"
)} />
```

### Theme Support

The app supports dark/light themes with CSS variables:

```css
/* CSS variables automatically switch based on theme */
.primary { color: hsl(var(--primary)); }
.primary-foreground { color: hsl(var(--primary-foreground)); }
```

## Internationalization

### Adding Translations

1. Add keys to `src/i18n/translations.ts`:

```typescript
export const translations = {
  en: {
    nav: {
      home: 'Home',
      newKey: 'New Translation'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      newKey: 'Nouvelle Traduction'
    }
  },
  mg: {
    nav: {
      home: 'Fandraisana',
      newKey: 'Dika Vaovao'
    }
  }
};
```

2. Use in components:

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();

return <h1>{t('nav.home')}</h1>;
```

### Language Persistence

Language preference is automatically saved to localStorage and restored on app load.

## Development Guidelines

### Code Style

- **TypeScript**: Strict mode disabled, explicit types for function parameters
- **Imports**: Group by React/React hooks → external libs → internal components
- **Naming**: PascalCase for components, camelCase for functions/hooks
- **Path aliases**: Use `@/*` for src directory imports

### Component Creation

1. Create component in appropriate directory
2. Export as named export
3. Use TypeScript interfaces for props
4. Follow existing patterns

```typescript
// src/components/MyComponent.tsx
interface MyComponentProps {
  title: string;
  onClick?: () => void;
}

export const MyComponent = ({ title, onClick }: MyComponentProps) => {
  return (
    <div onClick={onClick}>
      {title}
    </div>
  );
};
```

### Adding New Features

1. **Plan the feature** and identify responsibilities
2. **Create separate files** for each responsibility
3. **Extract data** to `src/data/` if static
4. **Add translations** if needed
5. **Update imports** and ensure proper composition

### State Management

- Use React hooks for local component state
- Use custom hooks for shared logic
- Avoid prop drilling with composition



## Contributing

### Code Quality

- Run `bun run lint` before committing
- Follow the established code style
- Ensure TypeScript types are correct
- Test your changes thoroughly

### Commit Guidelines

- Use clear, descriptive commit messages
- Follow conventional commit format when possible
- Keep commits focused on single changes

### Pull Request Process

1. Create a feature branch from `main`
2. Make your changes following the guidelines
3. Test thoroughly
4. Create a pull request with description
5. Wait for review and approval

## Resources

- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- blabla
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Framer Motion](https://www.framer.com/motion/)
- [React i18next](https://react.i18next.com)
