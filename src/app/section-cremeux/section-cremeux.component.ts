import { Component } from '@angular/core';
import { NgOptimizedImage, NgFor, CurrencyPipe } from '@angular/common';

// Définition de l'interface Product pour typer nos produits
interface Produit {
  id: number;        // Identifiant unique du produit
  nom: string;      // Nom du produit
  description: string; // Description du produit
  prix: number;     // Prix du produit en Francs CFA
  imageUrl: string;  // URL de l'image du produit
}


@Component({
  selector: 'app-section-cremeux',
  standalone: true,
  imports: [NgOptimizedImage, NgFor, CurrencyPipe],
  templateUrl: './section-cremeux.component.html',
  styleUrl: './section-cremeux.component.scss'
})
export class SectionCremeuxComponent {
  // Tableau des produits disponibles
  produits: Produit[] = [
    {
      id: 1,
      nom: 'Nature',
      description: 'Gourmet sans sucre',
      prix: 450,
      imageUrl: 'images/header.png'
    },
    {
      id: 2,
      nom: 'Simple',
      description: 'Gourmet avec sucre',
      prix: 600,
      imageUrl: 'images/header.png'
    },
    {
      id: 3,
      nom: 'Céréales',
      description: 'Gourmet avec céréales',
      prix: 1000,
      imageUrl: 'images/header.png'
    }
  ];

  // Vous pouvez ajouter ici d'autres méthodes pour gérer les interactions utilisateur,
  // comme l'ajout au panier ou la mise à jour des quantités
}
