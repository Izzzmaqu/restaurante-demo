// Página de reservaciones: formulario que envía por mailto sin necesitar backend
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;   // Ej: Cumpleaños, Aniversario, Cena de negocios
  notes: string;
}

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './reservations.html'
})
export class ReservationsComponent {

  form: ReservationForm = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    notes: ''
  };

  submitted = signal(false);

  // Horarios disponibles para el selector de hora
  availableTimes = [
    '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30'
  ];

  occasions = [
    'Cena casual',
    'Cumpleaños',
    'Aniversario',
    'Cena de negocios',
    'Celebración familiar',
    'Propuesta de matrimonio',
    'Otro'
  ];

  // Calcula la fecha mínima para reservar: hoy + 1 día (no se puede reservar hoy mismo)
  get minDate(): string {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    // toISOString().split('T')[0] convierte la fecha al formato YYYY-MM-DD que necesita el input date
    return tomorrow.toISOString().split('T')[0];
  }

  onSubmit(): void {
    const subject = encodeURIComponent(`Reservación - ${this.form.name} - ${this.form.date}`);
    const body = encodeURIComponent(
      `NUEVA RESERVACIÓN\n\n` +
      `Nombre: ${this.form.name}\n` +
      `Email: ${this.form.email}\n` +
      `Teléfono: ${this.form.phone}\n` +
      `Fecha: ${this.form.date}\n` +
      `Hora: ${this.form.time}\n` +
      `Personas: ${this.form.guests}\n` +
      `Ocasión: ${this.form.occasion}\n\n` +
      `Notas especiales:\n${this.form.notes || 'Ninguna'}`
    );
    window.location.href = `mailto:reservaciones@bellavista.cr?subject=${subject}&body=${body}`;
    this.submitted.set(true);
    this.form = { name: '', email: '', phone: '', date: '', time: '', guests: 2, occasion: '', notes: '' };
    setTimeout(() => this.submitted.set(false), 6000);
  }
}
