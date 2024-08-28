import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-section-creation',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-creation.component.html',
  styleUrl: './section-creation.component.scss'
})
export class SectionCreationComponent {

  natureUrl = 'images/header.png'
  creation = 'videos/creation.mp4'
  creationGif = 'images/creation.gif'
}
