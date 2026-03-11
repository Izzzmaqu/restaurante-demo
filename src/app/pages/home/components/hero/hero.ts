// Sección hero: primera impresión del sitio, ocupa toda la altura de la pantalla
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.html'
})
export class HeroComponent {}
