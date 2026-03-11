// Página de contacto con formulario que envía por mailto (sin backend)
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Interfaz para los campos del formulario de contacto
interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  // FormsModule habilita ngModel para el two-way binding del formulario
  imports: [FormsModule],
  templateUrl: './contact.html'
})
export class ContactComponent {

  // Objeto reactivo que Angular mantiene sincronizado con los inputs del formulario
  form: ContactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  // Signal para mostrar/ocultar el mensaje de confirmación después de enviar
  submitted = signal(false);

  onSubmit(): void {
    // Construye un mailto con los datos del formulario como cuerpo del email
    // Esta técnica no requiere backend: abre el cliente de correo del usuario
    const subject = encodeURIComponent(`Consulta de ${this.form.name} - Bella Vista`);
    const body = encodeURIComponent(
      `Nombre: ${this.form.name}\n` +
      `Email: ${this.form.email}\n` +
      `Teléfono: ${this.form.phone}\n\n` +
      `Mensaje:\n${this.form.message}`
    );
    // Abre el cliente de correo del usuario con los datos prellenados
    window.location.href = `mailto:hola@bellavista.cr?subject=${subject}&body=${body}`;

    // Muestra el mensaje de confirmación y limpia el formulario
    this.submitted.set(true);
    this.form = { name: '', email: '', phone: '', message: '' };

    // Oculta el mensaje de confirmación después de 5 segundos
    setTimeout(() => this.submitted.set(false), 5000);
  }
}
