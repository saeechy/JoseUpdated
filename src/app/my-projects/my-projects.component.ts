import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.css'
})
export class MyProjectsComponent {
// Display only (no editing mode)
  myWork: string = "This is where your CMS content will appear after migrating from PHP.";

  // Dummy project list (replace with API / JSON later)
  projects = [
    {
      title: "Project 1",
      description: "Description of project 1.",
      image: "assets/project1.jpg"
    },
    {
      title: "Project 2",
      description: "Description of project 2.",
      image: "assets/project2.jpg"
    }
  ];

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  closeModal() {
    this.selectedProject = null;
  }

content = [
    {
      id: "project1",
      title: "Tokyo Table",
      img: "/assets/images/tokyotable.png",
      desc: "A MEVN Project that is created for a sample business.",
      timespan: "1 month",
      languages: "HTML, CSS, JS",
      tools: "Express.Js, Vue.JS, Node.js, MongoDB, Figma, Canva",
      role: "Fullstack Developer"
    },
    {
      id: "project2",
      title: "Business Website Prototype",
      img: "/assets/images/jng.png",
      desc: "A prototype for a website that is made for our business.",
      timespan: "2 Days",
      languages: "None",
      tools: "Canva",
      role: "UI/UX"
    },
    {
      id: "project3",
      title: "Library Management System Prototype",
      img: "/assets/images/tokyotable.png",
      desc: "A project aimed at enhancing book cataloging and lending processes.",
      timespan: "2 months",
      languages: "HTML, CSS, JS",
      tools: "Figma, Canva",
      role: "Frontend/UI/UX"
    },
    {
      id: "project4",
      title: "Logo",
      img: "/assets/images/logo.png",
      desc: "A graphic design/sticker for our business.",
      timespan: "1 day",
      languages: "None",
      tools: "Canva",
      role: "UI/UX"
    },
    {
      id: "project5",
      title: "Business Cards",
      img: "/assets/images/businesscard.png",
      desc: "A business card that I created for our business.",
      timespan: "1 day",
      languages: "None",
      tools: "Canva",
      role: "UI/UX"
    },
    {
      id: "project6",
      title: "Tailwind Gallery Project",
      img: "/assets/images/tailwind.png",
      desc: "A Angular gallery website that uses tailwind for design.",
      timespan: "3 days",
      languages: "HTML, CSS, JS",
      tools: "Figma, Canva, Angular",
      role: "Frontend/UI/UX"
    }
  ];  
}

