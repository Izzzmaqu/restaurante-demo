// Pequeña sección "preview" de la historia del restaurante
// Su objetivo es generar confianza e invitar a ver la página completa de Nosotros
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about-preview.html'
})
export class AboutPreviewComponent {}
