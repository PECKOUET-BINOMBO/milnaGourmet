import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicePanier, ElementPanier } from '../services/service-panier';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.scss'
})


export class PanierComponent implements OnInit {
  elementsPanier: ElementPanier[] = [];
  total: number = 0;
  nombreTotalProduits: number = 0; // Propriété pour le nombre total de produits

  constructor(private servicePanier: ServicePanier) {}

  ngOnInit() {
    this.servicePanier.panier$.subscribe(elements => {
      this.elementsPanier = elements;
      this.calculerTotal();
      this.calculerNombreTotalProduits();
    });
  }

  // Méthode pour retirer un élément du panier
  retirerElement(id: number) {
    this.servicePanier.retirerDuPanier(id);
  }

  // Méthode pour augmenter la quantité d'un élément
  augmenterQuantite(element: ElementPanier) {
    this.mettreAJourQuantite(element, element.quantite + 1);
  }

  // Méthode pour diminuer la quantité d'un élément
  diminuerQuantite(element: ElementPanier) {
    if (element.quantite > 1) {
      this.mettreAJourQuantite(element, element.quantite - 1);
    }
  }

  // Méthode pour mettre à jour la quantité d'un élément
  private mettreAJourQuantite(element: ElementPanier, nouvelleQuantite: number) {
    this.servicePanier.mettreAJourQuantite(element.id, nouvelleQuantite);
    this.calculerTotal();
    this.calculerNombreTotalProduits();
  }

  // Méthode pour calculer le total du panier
  private calculerTotal() {
    this.total = this.elementsPanier.reduce((sum, element) => sum + element.prix * element.quantite, 0);
  }

  // Nouvelle méthode pour calculer le nombre total de produits dans le panier
  private calculerNombreTotalProduits() {
    this.nombreTotalProduits = this.elementsPanier.reduce((sum, element) => sum + element.quantite, 0);
  }
  
}
