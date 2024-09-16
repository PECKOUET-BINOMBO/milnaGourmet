import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  logoUrl = 'images/logo2.png'

  fb = inject(FormBuilder);
  http = inject(HttpClient);
  authService = inject(AuthService);

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email]],
    tel: ['', Validators.required],
    adresse: ['', Validators.required],
    password: ['', [
      Validators.required,
      Validators.minLength(8)
    ]],
  });

  errorMessage: string | null = null;
  successMessage: string | null = null;

  onSubmit(): void {
    if (this.form.valid) {
      const { name, email, tel, adresse, password } = this.form.getRawValue();
      this.authService.register(name, email, tel, adresse, password).subscribe({
        next: () => {
          this.successMessage = "Inscription réussie ! Vous pouvez maintenant vous connecter.";
          this.errorMessage = null;
          this.form.reset();
        },
        error: (err) => {
          this.errorMessage = this.getErrorMessage(err.code);
          this.successMessage = null;
        }
      });
    } else {
      this.errorMessage = "Veuillez remplir correctement tous les champs du formulaire.";
      this.successMessage = null;
    }
  }

  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return "Cette adresse email est déjà utilisée.";
      case 'auth/invalid-email':
        return "L'adresse email n'est pas valide.";
      case 'auth/weak-password':
        return "Le mot de passe est trop faible.";
      default:
        return "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
    }
  }
}
