import { NgOptimizedImage, ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { PanierComponent } from "../panier/panier.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PanierComponent
],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
   logoUrl = 'images/logo2.png'
   iconCompte = 'images/compte.gif'

   constructor(private viewportScroller: ViewportScroller) {}

   scrollToElement(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
   }

   logout():void{
    console.log('Déconnexion')
  }

}
