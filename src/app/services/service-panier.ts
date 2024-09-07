import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ElementPanier {
  id: number;
  nom: string;
  prix: number;
  quantite: number;
  type: 'cremeux' | 'liquide' | 'creation';
}

@Injectable({
  providedIn: 'root'
})
export class ServicePanier {
  private _panier = new BehaviorSubject<ElementPanier[]>([]);
  panier$ = this._panier.asObservable();

  constructor() {}

  ajouterAuPanier(element: ElementPanier) {
    const panierCourant = this._panier.value;
    const elementExistant = panierCourant.find(item => item.id === element.id && item.type === element.type);

    if (elementExistant) {
      elementExistant.quantite = Number(elementExistant.quantite) + Number(element.quantite);
    } else {
      panierCourant.push({...element, quantite: Number(element.quantite)});
    }

    this._panier.next(panierCourant);
  }

  mettreAJourQuantite(id: number, type: 'cremeux' | 'liquide' | 'creation', nouvelleQuantite: number) {
    const panierCourant = this._panier.value;
    const elementAMettreAJour = panierCourant.find(item => item.id === id && item.type === type);

    if (elementAMettreAJour) {
      elementAMettreAJour.quantite = Number(nouvelleQuantite);
      this._panier.next(panierCourant);
    }
  }

  retirerDuPanier(id: number, type: 'cremeux' | 'liquide' | 'creation') {
    const panierCourant = this._panier.value;
    const panierMisAJour = panierCourant.filter(item => !(item.id === id && item.type === type));
    this._panier.next(panierMisAJour);
  }

  calculerTotal(): number {
    return this._panier.value.reduce((total, item) =>
      total + (Number(item.prix) * Number(item.quantite)), 0);
  }

  calculerNombreTotalProduits(): number {
    return this._panier.value.reduce((total, item) =>
      total + Number(item.quantite), 0);
  }
}
