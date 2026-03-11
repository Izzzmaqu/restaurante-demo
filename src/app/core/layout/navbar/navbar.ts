// Navbar fija con efecto glass al scroll y menú hamburguesa para móvil
import { Component, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './navbar.html'
})
export class NavbarComponent {

  // Signal: cuando cambia su valor, Angular actualiza solo lo que lo usa en el template
  // Controla si el menú hamburguesa está abierto en móvil
  mobileMenuOpen = signal(false);

  // Controla si el usuario hizo scroll para agregar fondo al navbar
  scrolled = signal(false);

  // Links de navegación como array para evitar repetir HTML con @for
  navLinks = [
    { label: 'Inicio',        path: '/inicio' },
    { label: 'Menú',          path: '/menu' },
    { label: 'Nosotros',      path: '/nosotros' },
    { label: 'Contacto',      path: '/contacto' },
  ];

  // HostListener escucha el evento 'scroll' de la ventana del navegador
  @HostListener('window:scroll')
  onScroll(): void {
    // Si el scroll vertical supera 50px, activamos el fondo del navbar
    this.scrolled.set(window.scrollY > 50);
  }

  toggleMobileMenu(): void {
    // update() invierte el valor actual del signal
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
