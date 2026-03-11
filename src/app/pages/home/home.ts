// Página de inicio: orquesta los sub-componentes en el orden que aparecen visualmente
import { Component } from '@angular/core';
import { HeroComponent }         from './components/hero/hero';
import { FeaturedDishesComponent } from './components/featured-dishes/featured-dishes';
import { AboutPreviewComponent } from './components/about-preview/about-preview';
import { TestimonialsComponent } from './components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturedDishesComponent, AboutPreviewComponent, TestimonialsComponent],
  templateUrl: './home.html'
})
export class HomeComponent {}
