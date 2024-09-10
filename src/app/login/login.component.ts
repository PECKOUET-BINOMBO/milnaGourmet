import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  logoUrl = 'images/logo2.png'

}
