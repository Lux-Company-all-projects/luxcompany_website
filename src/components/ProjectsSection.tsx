import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data/projects';

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">{t('projects.title')}</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">{t('projects.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="h-full rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg overflow-hidden">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden bg-secondary">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      <Gamepad2 className="w-3.5 h-3.5" />
                      {t(`projects.types.${project.type}`)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">{project.title}</h3>
                    <span className="text-xs text-muted-foreground">{project.year}</span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {t(`projects.items.${project.id}.description`)}
                  </p>

                  <div className="flex items-center gap-3">
                    <Button asChild className="flex-1 shadow-glow">
                      <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        {t('projects.download')}
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a href={project.downloadUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
