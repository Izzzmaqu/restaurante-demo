// Footer estático: muestra links, info de contacto y copyright
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html'
})
export class FooterComponent {
  // Se calcula dinámicamente para que el año del copyright siempre esté actualizado
  currentYear = new Date().getFullYear();
}
