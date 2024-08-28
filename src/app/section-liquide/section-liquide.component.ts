import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-liquide',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-liquide.component.html',
  styleUrl: './section-liquide.component.scss'
})
export class SectionLiquideComponent {
  natureUrl = 'images/header.png'
  liquide = 'images/liquide.png'

}
