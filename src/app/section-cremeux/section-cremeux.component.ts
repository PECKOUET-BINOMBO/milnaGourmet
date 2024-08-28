import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-section-cremeux',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-cremeux.component.html',
  styleUrl: './section-cremeux.component.scss'
})
export class SectionCremeuxComponent {
  natureUrl = 'images/header.png'
  simpleUrl = 'images/header.png'
  cerealeUrl = 'images/header.png'

}
