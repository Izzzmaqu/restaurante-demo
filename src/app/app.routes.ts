// Define todas las rutas de la aplicación y sus componentes asociados
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Ruta vacía redirige automáticamente al inicio
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    // loadComponent hace lazy loading: el bundle del componente solo se descarga
    // cuando el usuario navega a esa ruta, mejorando el tiempo de carga inicial
    loadComponent: () => import('./pages/home/home').then(m => m.HomeComponent)
  },
  {
    path: 'menu',
    loadComponent: () => import('./pages/menu/menu').then(m => m.MenuComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./pages/about/about').then(m => m.AboutComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contact/contact').then(m => m.ContactComponent)
  },
  {
    path: 'reservaciones',
    loadComponent: () => import('./pages/reservations/reservations').then(m => m.ReservationsComponent)
  },
  {
    // Wildcard: cualquier ruta no definida redirige al inicio en lugar de mostrar error
    path: '**',
    redirectTo: 'inicio'
  }
];
