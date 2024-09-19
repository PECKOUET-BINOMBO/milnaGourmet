import { NgOptimizedImage, ViewportScroller, CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PanierComponent } from "../panier/panier.component";
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PanierComponent,
    RouterLink,
    RouterOutlet,
    CommonModule
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent implements OnInit {
  logoUrl = 'images/logo2.png';
  iconCompte = 'images/compte.gif';
  currentUser$: Observable<User | null>;

  @Output() deconnexionReussie = new EventEmitter<void>();

  constructor(
    private viewportScroller: ViewportScroller,
    private authService: AuthService,
    private router: Router

  ) {
    this.currentUser$ = this.authService.getCurrentUser();
  }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }


  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.deconnexionReussie.emit();
        this.router.navigate(['/']); // Redirection vers la page d'accueil
      },
      error: (error) => {
        console.error('Logout error', error);
      }
    });
  }

  
}
