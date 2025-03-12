import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GameComponent } from './features/game/game.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'games',
    component: GameComponent,
  },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'disabled',
  anchorScrolling: 'disabled',
  scrollOffset: [0, 0],
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
