import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  standalone: false,
  templateUrl: "./about.component.html",
  styleUrl: "./about.component.scss",
})
export class AboutComponent {
  currentIndex = 0;
  teamMembers = [
    {
      name: "RANDRIANIRINA Lahatriniaina Luca",
      age: 19,
      role: "Leader / Développeur",
      specialties: ["Game Development", "Cybersecurity"],
      email: "lucarandrianirina2507@gmail.com",
    },
    {
      name: "ANDRIAMAHEFATIANA Tiavina Niaina",
      age: 18,
      role: "Développeur",
      specialties: ["Web Development"],
      email: "Tiavinamahefa4@gmail.com",
    },
    {
      name: "AMBININTSOA Hajatiana",
      age: 22,
      role: "Développeur",
      specialties: ["Réseau Informatique"],
      email: "hajatianaambinintsoa11@gmail.com",
    },
    {
      name: "RAKOTOARISON Avotra",
      age: 20,
      role: "Développeur",
      specialties: ["Cybersecurity"],
      email: "rakotoarisonavotra53@gmail.com",
    },
    {
      name: "ANDRIANARIVO Alain Patrick",
      age: 19,
      role: "Designer",
      specialties: ["Ethical Hacking"],
      email: "pahkely33@gmail.com",
    },
    {
      name: "JOELNOMENA Lahatrin'ny Avo",
      age: 18,
      role: "Développeur",
      specialties: ["Game Development", "Cybersecurity"],
      email: "tiavinanomana451@gmail.com",
    },
    {
      name: "ANDRIANJAFIMAHEFA Anjarimanitra Misandratriniaina",
      age: 18,
      role: "Développeur",
      specialties: ["Intelligence Artificielle"],
      email: "andrianjafimahefamisandratra@gmail.com",
    },
    {
      name: "RANDRIAMANANJARA Maminantenaina Harison Patrick",
      age: null,
      role: "Développeur",
      specialties: ["Machine learning", "Cybersecurity"],
      email: "randriamananjara24@gmail.com",
    },
    {
      name: "RAMILISON Faniloniaina",
      age: null,
      role: "Développeur",
      specialties: ["Développement"],
      email: "faniloniaina21@gmail.com",
    },
    {
      name: "RANAIVOSEHENO Tojonirina fanomezantsoa",
      age: 19,
      role: "Développeur",
      specialties: ["Cybersecurity"],
      email: "fanomezanatojonirina4@gmail.com",
    }, 
    {
      name: "RAFANAMBINANA Fanomezantsoa",
      age: 21,
      role: "Développeur",
      specialties: ["Genie logiciel"],
      email: "fanomezanafana@gmail.com",
    },     
    {
      name: "Ny Avo Steeve",
      age: 19,
      role: "Développeur",
      specialties: ["Developpeur C#"],
      email: "nyavosteeve1@gmail.com",
    },     
  ];
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.teamMembers.length) %
      this.teamMembers.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.teamMembers.length;
  }
}
