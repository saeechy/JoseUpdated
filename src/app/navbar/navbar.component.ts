import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
   isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }
  @ViewChild('navbarCollapse', { static: true }) navbarCollapse!: ElementRef;

  private shownHandler = () => document.body.classList.add('push-down');
  private hiddenHandler = () => document.body.classList.remove('push-down');

  ngAfterViewInit() {
    const el = this.navbarCollapse.nativeElement;
    el.addEventListener('shown.bs.collapse', this.shownHandler);
    el.addEventListener('hidden.bs.collapse', this.hiddenHandler);
  }

  ngOnDestroy() {
    const el = this.navbarCollapse?.nativeElement;
    if (el) {
      el.removeEventListener('shown.bs.collapse', this.shownHandler);
      el.removeEventListener('hidden.bs.collapse', this.hiddenHandler);
    }
    // cleanup body class if component destroyed while open
    document.body.classList.remove('push-down');
  }
}
