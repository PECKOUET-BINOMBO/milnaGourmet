import { Component } from '@angular/core';
import { NgOptimizedImage, NgFor, CurrencyPipe } from '@angular/common';

// Définition de l'interface Product pour typer nos produits liquides
interface Produit {
  id: number;        // Identifiant unique du produit
  nom: string;      // Nom du produit
  description: string; // Description du produit
  prix: number;     // Prix du produit en Francs CFA
  imageUrl: string;  // URL de l'image du produit
}


@Component({
  selector: 'app-section-liquide',
  standalone: true,
  imports: [NgOptimizedImage, NgFor, CurrencyPipe],
  templateUrl: './section-liquide.component.html',
  styleUrl: './section-liquide.component.scss'
})
export class SectionLiquideComponent {
  // Tableau des produits liquides disponibles
  produits: Produit[] = [
    {
      id: 1,
      nom: 'Bissap',
      description: 'Gourmet liquide à l\'hibiscus',
      prix: 2500,
      imageUrl: 'images/header.png'
    },
    {
      id: 2,
      nom: 'Mil',
      description: 'Gourmet liquide au mil',
      prix: 2500,
      imageUrl: 'images/header.png'
    },
    {
      id: 3,
      nom: 'Couscous',
      description: 'Gourmet liquide au couscous',
      prix: 2500,
      imageUrl: 'images/header.png'
    }
  ];

  // Vous pouvez ajouter ici d'autres méthodes pour gérer les interactions utilisateur,
  // comme l'ajout au panier ou la mise à jour des quantités
}
