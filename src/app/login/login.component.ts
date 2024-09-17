import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  logoUrl = 'images/logo2.png'

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  errorMessage: string | null = null;
  successMessage: string | null = null;

  onSubmit(): void {
    if (this.form.valid) {
      const { email, password } = this.form.getRawValue();
      this.authService.login(email, password).subscribe({
        next: () => {
          this.successMessage = "Connexion réussie !";
          this.errorMessage = null;
        },
        error: (err) => {
          this.errorMessage = this.getErrorMessage(err.code);
          this.successMessage = null;
        }
      });
    } else {
      this.form.markAllAsTouched(); // This will trigger the display of validation messages
      this.errorMessage = 'Veuillez corriger les erreurs dans le formulaire.';
    }
  }

  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/user-not-found':
        return "Aucun utilisateur trouvé avec cette adresse email.";
      case 'auth/wrong-password':
        return "Mot de passe incorrect.";
      case 'auth/invalid-email':
        return "L'adresse email n'est pas valide.";
      default:
        return "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
    }
  }
}
