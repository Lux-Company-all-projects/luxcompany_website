import { Component } from "@angular/core";

@Component({
  selector: "app-game",
  templateUrl: "./game.component.html",
  styleUrl: "./game.component.scss",
  standalone: false,
})
export class GameComponent {
  selectedGame: any = null;

  openModal(game: any) {
    this.selectedGame = game;
  }

  closeModal() {
    this.selectedGame = null;
  }

  games = [
    {
      title: "DAGO LIFE",
      description:
        "Ce jeu s'inspire de l'histoire d'un jeune homme malgache qui fait face à des difficultés suite à l'obtention de son baccalauréat. De plus, il est obligé de trouver un travail pour survivre .Tout au long du jeu, il doit prendre des décisions et assumer les conséquences (chômage,prison,hospitalisation,mort...).Ce jeu a été crée en juillet 2024. Son but est de représenter la vie telle qu'elle est à Madagascar et d'influencer les choix du grand public.",
      image: "/dago_life.png",
      downloadLink: "https://drive.google.com/file/d/1-3OCOss6ch-GBKu7g--YqjDCvtcnkmgj/view",
    },
  ];

  currentIndex = 0;

  nextGame() {
    this.currentIndex = (this.currentIndex + 1) % this.games.length;
  }
}
