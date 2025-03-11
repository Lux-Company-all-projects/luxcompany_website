import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
  standalone: false,
})
export class GameComponent {
  games = [
    {
      title: 'Pixel Adventure',
      description:
        'Un jeu de plateforme rétro inspiré des classiques des années 80.',
      image: 'https://via.placeholder.com/300x200',
      downloadLink: '#',
    },
    {
      title: 'Cyber Quest',
      description:
        'Un RPG futuriste avec des graphismes en pixel art et une bande-son chiptune.',
      image: 'https://via.placeholder.com/300x200',
      downloadLink: '#',
    },
  ];

  currentIndex = 0;

  nextGame() {
    this.currentIndex = (this.currentIndex + 1) % this.games.length;
  }
}
