import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   content = {
    intro_paragraph: 'This is my intro paragraph from the CMS.',
    about_me: 'I am a passionate web developer that enjoys turning ideas into clean, responsive, and visually appealing websites, focusing on simplicity, usability, and modern design.',
    my_work: 'I build web applications using Angular, PHP, MySQL, and modern CSS frameworks. My projects focus on performance, user experience, and creating smooth, functional systems for real users.',
    get_in_touch: 'Interested in collaborating or need help with a project? Feel free to message me anytime — I’m always open to work, ideas, and new opportunities.',
  };
  
}
