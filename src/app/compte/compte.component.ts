import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import {ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-compte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgOptimizedImage],
  templateUrl: './compte.component.html',
  styleUrl: './compte.component.scss'
})
export class CompteComponent {
  logoUrl = 'images/logo2.png'
}
