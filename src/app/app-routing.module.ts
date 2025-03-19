import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { GameComponent } from './features/game/game.component';
import { ContactComponent } from './features/contact/contact.component';
import { AboutComponent } from './features/about/about.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'games',
    component: GameComponent,
  },
  {
    path  :'contact',
    component : ContactComponent
  },
  {
    path :'about',
    component :AboutComponent
  }
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
