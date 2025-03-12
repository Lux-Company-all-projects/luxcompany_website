import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from "./features/home/home.component";
import { GameComponent } from './features/game/game.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent,HomeComponent,GameComponent],
  imports: [AppRoutingModule, BrowserModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
