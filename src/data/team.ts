import { LucideIcon, Gamepad2, Globe, Cpu, Shield, Brain, Code, Settings } from 'lucide-react';

export interface TeamMember {
  name: string;
  role: 'leader' | 'developer' | 'designer';
  specialties: string[];
  email: string;
  icon: LucideIcon;
}

export const teamMembers: TeamMember[] = [
  {
    name: "RANDRIANIRINA Lahatriniaina Luca",
    role: "leader",
    specialties: ["Game Development", "Web Development"],
    email: "lucarandrianirina2507@gmail.com",
    icon: Gamepad2,
  },
  {
    name: "ANDRIAMAHEFATIANA Tiavina Niaina",
    role: "developer",
    specialties: ["Web Development"],
    email: "Tiavinamahefa4@gmail.com",
    icon: Globe,
  },
  {
    name: "RAKOTOARISON Avotra",
    role: "developer",
    specialties: ["Cybersecurity"],
    email: "rakotoarisonavotra53@gmail.com",
    icon: Shield,
  },
  {
    name: "ANDRIANARIVO Alain Patrick",
    role: "designer",
    specialties: ["Ethical Hacking"],
    email: "pahkely33@gmail.com",
    icon: Shield,
  },
  {
    name: "JOELNOMENA Lahatrin'ny Avo",
    role: "developer",
    specialties: ["Game Development", "Cybersecurity"],
    email: "tiavinanomana451@gmail.com",
    icon: Gamepad2,
  },
  {
    name: "ANDRIANJAFIMAHEFA Anjarimanitra",
    role: "developer",
    specialties: ["Intelligence Artificielle"],
    email: "andrianjafimahefamisandratra@gmail.com",
    icon: Brain,
  },
  {
    name: "RANDRIAMANANJARA Maminantenaina",
    role: "developer",
    specialties: ["Machine Learning", "Cybersecurity"],
    email: "randriamananjara24@gmail.com",
    icon: Brain,
  },
  {
    name: "RAMILISON Faniloniaina",
    role: "developer",
    specialties: ["Développement"],
    email: "faniloniaina21@gmail.com",
    icon: Code,
  },
  {
    name: "RANAIVOSEHENO Tojonirina",
    role: "developer",
    specialties: ["Cybersecurity"],
    email: "fanomezanatojonirina4@gmail.com",
    icon: Shield,
  },
  {
    name: "RAFANAMBINANA Fanomezantsoa",
    role: "developer",
    specialties: ["Génie Logiciel"],
    email: "fanomezanafana@gmail.com",
    icon: Settings,
  },
  {
    name: "Ny Avo Steeve",
    role: "developer",
    specialties: ["Développeur C#"],
    email: "nyavosteeve1@gmail.com",
    icon: Code,
  },
];
