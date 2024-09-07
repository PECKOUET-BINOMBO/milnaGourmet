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
  nombreTotalProduits: number = 0;
  types: ('cremeux' | 'liquide' | 'creation')[] = ['cremeux', 'liquide', 'creation'];

  constructor(private servicePanier: ServicePanier) {}

  ngOnInit() {
    this.servicePanier.panier$.subscribe(elements => {
      this.elementsPanier = elements;
      this.calculerTotal();
      this.calculerNombreTotalProduits();
    });
  }

  retirerElement(element: ElementPanier) {
    this.servicePanier.retirerDuPanier(element.id, element.type);
  }

  augmenterQuantite(element: ElementPanier) {
    this.mettreAJourQuantite(element, element.quantite + 1);
  }

  diminuerQuantite(element: ElementPanier) {
    if (element.quantite > 1) {
      this.mettreAJourQuantite(element, element.quantite - 1);
    }
  }

  private mettreAJourQuantite(element: ElementPanier, nouvelleQuantite: number) {
    this.servicePanier.mettreAJourQuantite(element.id, element.type, nouvelleQuantite);
  }

  private calculerTotal() {
    this.total = this.servicePanier.calculerTotal();
  }

  private calculerNombreTotalProduits() {
    this.nombreTotalProduits = this.servicePanier.calculerNombreTotalProduits();
  }

  getElementsParType(type: 'cremeux' | 'liquide' | 'creation'): ElementPanier[] {
    return this.elementsPanier.filter(element => element.type === type);
  }
}
