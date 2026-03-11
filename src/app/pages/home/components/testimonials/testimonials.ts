// Sección de reseñas: genera confianza social mostrando experiencias de clientes reales
import { Component, signal } from '@angular/core';
import { NgClass } from '@angular/common';

// Interfaz local: solo se usa en este componente, no necesita ir a shared/models
interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;   // Del 1 al 5, para renderizar las estrellas
  avatar: string;   // Inicial del nombre, se usa como avatar de texto
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [],
  templateUrl: './testimonials.html'
})
export class TestimonialsComponent {

  // Signal que guarda el índice del testimonio activo en el carrusel
  activeIndex = signal(0);

  testimonials: Testimonial[] = [
    {
      name: 'María Fernández',
      role: 'Cliente habitual',
      text: 'Cada visita a Bella Vista es una experiencia que supera la anterior. El lomo al vino tinto es simplemente perfecto. El ambiente, el servicio y la comida son de otro nivel.',
      rating: 5,
      avatar: 'M'
    },
    {
      name: 'Carlos Ureña',
      role: 'Celebración de aniversario',
      text: 'Celebramos nuestro décimo aniversario aquí y fue una noche mágica. El personal fue atento y discreto, y el menú degustación superó todas nuestras expectativas.',
      rating: 5,
      avatar: 'C'
    },
    {
      name: 'Sofía Jiménez',
      role: 'Cena de negocios',
      text: 'Llevé a un cliente importante y quedó muy impresionado. La tabla de quesos artesanales y el salmón en costra de hierbas son mis favoritos. Lo recomiendo sin dudarlo.',
      rating: 5,
      avatar: 'S'
    },
    {
      name: 'Andrés Mora',
      role: 'Turista',
      text: 'Vine a Costa Rica y Bella Vista fue la mejor recomendación que me dieron. El ceviche de mariscos tenía un sabor increíble. Definitivamente vuelvo en mi próximo viaje.',
      rating: 5,
      avatar: 'A'
    }
  ];

  // Genera un array del tamaño del rating para usar con @for en el template
  // Ej: rating 5 → [0, 1, 2, 3, 4] → 5 estrellas
  getStars(rating: number): number[] {
    return Array.from({ length: rating });
  }

  // Navega al testimonio anterior, vuelve al último si está en el primero
  prev(): void {
    this.activeIndex.update(i =>
      i === 0 ? this.testimonials.length - 1 : i - 1
    );
  }

  // Navega al siguiente testimonio, vuelve al primero si está en el último
  next(): void {
    this.activeIndex.update(i =>
      i === this.testimonials.length - 1 ? 0 : i + 1
    );
  }

  // Navega directo a un índice específico al hacer clic en los dots
  goTo(index: number): void {
    this.activeIndex.set(index);
  }
}
