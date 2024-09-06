import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Interface pour définir la structure d'un élément du panier
export interface ElementPanier {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
}

@Injectable({
  providedIn: 'root'
})
export class ServicePanier {
  // Tableau pour stocker les éléments du panier
  private elementsPanier: ElementPanier[] = [];
  // BehaviorSubject pour émettre les changements du panier
  private panierSubject = new BehaviorSubject<ElementPanier[]>([]);

  // Observable pour s'abonner aux changements du panier
  panier$ = this.panierSubject.asObservable();

  // Méthode pour ajouter un élément au panier
  ajouterAuPanier(element: ElementPanier) {
    const elementExistant = this.elementsPanier.find(e => e.id === element.id);
    if (elementExistant) {
      elementExistant.quantite += element.quantite;
    } else {
      this.elementsPanier.push(element);
    }
    this.panierSubject.next(this.elementsPanier);
  }

  // Méthode pour retirer un élément du panier
  retirerDuPanier(id: number) {
    this.elementsPanier = this.elementsPanier.filter(element => element.id !== id);
    this.panierSubject.next(this.elementsPanier);
  }

  // Méthode pour mettre à jour la quantité d'un élément
  mettreAJourQuantite(id: number, quantite: number) {
    const element = this.elementsPanier.find(e => e.id === id);
    if (element) {
      element.quantite = quantite;
      this.panierSubject.next(this.elementsPanier);
    }
  }

  // Méthode pour calculer le total du panier
  calculerTotal(): number {
    return this.elementsPanier.reduce((total, element) => total + element.prix * element.quantite, 0);
  }

  // Méthode pour obtenir tous les éléments du panier
  obtenirElementsPanier(): ElementPanier[] {
    return this.elementsPanier;
  }
}
