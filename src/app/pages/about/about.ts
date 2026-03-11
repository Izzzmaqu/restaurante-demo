// Página "Nosotros": historia del restaurante, equipo y valores
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html'
})
export class AboutComponent {

  // Datos del equipo como array para evitar repetir HTML con @for
  team = [
    {
      name: 'Chef Marco Ureña',
      role: 'Chef Ejecutivo & Fundador',
      bio: '15 años de experiencia. Formado en Le Cordon Bleu París y apasionado por la cocina mediterránea con toques ticos.',
      imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?fm=webp&w=600&q=80'
    },

    {
      name: 'Andrea Solano',
      role: 'Sommelier Certificada',
      bio: 'Especialista en vinos del nuevo mundo. Diseña la carta de vinos de temporada y conduce catas mensuales.',
      imageUrl: 'https://images.unsplash.com/photo-1643340632674-fe94c07f67a9?fm=webp&w=600&q=80'
    },
    {
      name: 'Luis Quesada',
      role: 'Chef de Pastelería',
      bio: 'Creador de los postres que han hecho famoso a Bella Vista. Su tiramisú y coulant son los más pedidos del menú.',
      imageUrl: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?fm=webp&w=600&q=80'
    }
  ];

  // Valores del restaurante: íconos en emoji para no depender de librerías de íconos
  values = [
    { icon: '🌿', title: 'Ingredientes frescos', desc: 'Trabajamos con productores locales costarricenses para garantizar frescura y apoyar la economía local.' },
    { icon: '🔥', title: 'Pasión en cada plato', desc: 'Cada receta pasa por un proceso de creación de semanas antes de llegar a nuestra carta.' },
    { icon: '🤝', title: 'Servicio cercano', desc: 'No somos un restaurante impersonal. Conocemos a nuestros clientes habituales y sus preferencias.' },
    { icon: '♻️', title: 'Compromiso ambiental', desc: 'Empaques biodegradables, reducción de desperdicio alimentario y energía renovable en nuestra cocina.' }
  ];
}
