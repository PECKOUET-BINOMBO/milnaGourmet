import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-oublie',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './login-oublie.component.html',
  styleUrl: './login-oublie.component.scss'
})
export class LoginOublieComponent {
  logoUrl = 'images/logo2.png'
}
