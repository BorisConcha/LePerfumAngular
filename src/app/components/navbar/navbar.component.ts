
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="container">
        <a class="navbar-brand" routerLink="/">
          <i class="fas fa-spray-can me-2"></i>Eau de Perfum
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/products" routerLinkActive="active">Productos</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/brands" routerLinkActive="active">Marcas</a>
            </li>
            <li class="nav-item" *ngIf="!authService.isLoggedIn()">
              <a class="nav-link" href="#" (click)="openLoginModal($event)">
                <i class="fas fa-user me-1"></i>Ingresar
              </a>
            </li>
            <li class="nav-item" *ngIf="!authService.isLoggedIn()">
              <a class="nav-link" href="#" (click)="openRegisterModal($event)">
                Registrarse
              </a>
            </li>
            <li class="nav-item dropdown" *ngIf="authService.isLoggedIn()">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                <i class="fas fa-user me-1"></i>{{ authService.getCurrentUser()?.name }}
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#" (click)="openProfileModal($event)">Mi Perfil</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#" (click)="logout($event)">Cerrar Sesión</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  openLoginModal(event: Event): void {
    event.preventDefault();
    // Lógica para abrir modal de login
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
      const modal = new (window as any).bootstrap.Modal(loginModal);
      modal.show();
    }
  }

  openRegisterModal(event: Event): void {
    event.preventDefault();
    // Lógica para abrir modal de registro
    const registerModal = document.getElementById('registerModal');
    if (registerModal) {
      const modal = new (window as any).bootstrap.Modal(registerModal);
      modal.show();
    }
  }

  openProfileModal(event: Event): void {
    event.preventDefault();
    // Lógica para abrir modal de perfil
    const profileModal = document.getElementById('profileModal');
    if (profileModal) {
      const modal = new (window as any).bootstrap.Modal(profileModal);
      modal.show();
    }
  }

  logout(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
