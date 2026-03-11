import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/layout/navbar/navbar';
import { FooterComponent } from './core/layout/footer/footer';

@Component({
  selector: 'app-root',   // ← debe decir 'app-root' para coincidir con index.html
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html'
})
export class App {}       // ← exportado como 'App'
