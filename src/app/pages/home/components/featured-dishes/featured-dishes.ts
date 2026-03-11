// Sección de platillos destacados: muestra los platillos con featured: true
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { FEATURED_DISHES } from '../../../../shared/data/menu.data';
import { Dish } from '../../../../shared/models/dish.model';

@Component({
  selector: 'app-featured-dishes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './featured-dishes.html'
})
export class FeaturedDishesComponent {
  // Trae directamente los platillos marcados como featured del archivo de datos
  dishes: Dish[] = FEATURED_DISHES;

  // Formatea el precio en colones con separadores de miles
  formatPrice(price: number): string {
    return `₡${price.toLocaleString('es-CR')}`;
  }
}
