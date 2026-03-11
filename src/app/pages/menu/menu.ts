// Página de menú completo con filtro por categorías usando signals
import { Component, signal, computed } from '@angular/core';
import { NgClass } from '@angular/common';
import { MENU_DATA, MENU_CATEGORIES } from '../../shared/data/menu.data';
import { Dish } from '../../shared/models/dish.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html'
})
export class MenuComponent {

  // Todas las categorías disponibles para los tabs del filtro
  categories: string[] = MENU_CATEGORIES;

  // Signal: guarda la categoría seleccionada actualmente
  selectedCategory = signal('Todos');

  // computed: se recalcula automáticamente cada vez que selectedCategory cambia
  // Filtra los platillos según la categoría activa
  filteredDishes = computed<Dish[]>(() => {
    const cat = this.selectedCategory();
    // Si está en "Todos", devuelve todos los platillos sin filtrar
    return cat === 'Todos'
      ? MENU_DATA
      : MENU_DATA.filter(d => d.category === cat);
  });

  // Cambia la categoría activa al hacer clic en un tab
  selectCategory(category: string): void {
    this.selectedCategory.set(category);
  }

  formatPrice(price: number): string {
    return `₡${price.toLocaleString('es-CR')}`;
  }
}
