import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { teamMembers } from '@/data/team';

export const TeamSection = () => {
  const { t } = useTranslation();

  return (
    <section id="team" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">{t('team.title')}</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">{t('team.subtitle')}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {teamMembers.map((member) => (
                <CarouselItem key={member.email} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div className="group h-full">
                    <div className="h-full p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <member.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-1 truncate">
                            {member.name.split(' ').slice(-2).join(' ')}
                          </h3>
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${
                            member.role === 'leader' 
                              ? 'bg-primary/20 text-primary' 
                              : member.role === 'artist2d'
                              ? 'bg-accent/20 text-accent'
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {t(`team.roles.${member.role}`)}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {member.specialties.map((specialty) => (
                          <span
                            key={specialty}
                            className="px-2 py-1 rounded-md bg-muted/50 text-muted-foreground text-xs"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors truncate"
                      >
                        <Mail className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{member.email}</span>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex items-center justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0 h-10 w-10 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
              <CarouselNext className="static translate-y-0 h-10 w-10 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
