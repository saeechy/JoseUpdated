import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  // NO EMAIL SENDING — just reset or console log.
  submitForm() {
    console.log("Form submitted:", this.formData);
    alert("Thank you! Your message was noted (no email backend yet).");

    this.formData = { name: "", email: "", message: "" };
  }
}
