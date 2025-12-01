import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { MyProjectsComponent } from "./my-projects/my-projects.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { NewFooterComponent } from "./new-footer/new-footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AboutMeComponent, MyProjectsComponent, ContactMeComponent, NavbarComponent, NewFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'AngularPortfolio';
}
