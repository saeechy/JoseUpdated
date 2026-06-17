import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent implements OnInit {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  sending = false;
  sent = false;
  errorMsg: string | null = null;
  ngOnInit() {
    emailjs.init(environment.emailjs.publicKey);
  }

  async submitForm() {
    if (!this.formData.name || !this.formData.email || !this.formData.message) return;

    const { serviceId, contactTemplateId, replyTemplateId, publicKey } = environment.emailjs;

    const contactTemplateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      message: this.formData.message,
      to_email: 'reyesjosefavian@gmail.com'
    };

    const replyTemplateParams = {
      to_name: this.formData.name,
      to_email: this.formData.email,
      reply_message: 'Thanks for contacting me. I received your message and will reply soon.'
    };

    this.sending = true;
    this.errorMsg = null;

    try {
      await emailjs.send(serviceId, contactTemplateId, contactTemplateParams, publicKey);

      if (replyTemplateId && replyTemplateId !== 'template_sl7nm8l') {
        await emailjs.send(serviceId, replyTemplateId, replyTemplateParams, publicKey);
      }

      this.sent = true;
      this.formData = { name: '', email: '', message: '' };
      setTimeout(() => (this.sent = false), 3000);
    } catch (err: any) {
      console.error('Email send error:', err);
      const msg = err && (err.text || err.message || JSON.stringify(err));
      this.errorMsg = msg || 'Message failed to send. Check console for details.';
    } finally {
      this.sending = false;
    }
  }
}
