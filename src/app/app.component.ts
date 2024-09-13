import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { SectionCremeuxComponent } from "./section-cremeux/section-cremeux.component";
import { SectionLiquideComponent } from "./section-liquide/section-liquide.component";
import { SectionCreationComponent } from "./section-creation/section-creation.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";
import { MessagePanierComponent } from "./message-panier/message-panier.component";
import { ServicePanier } from './services/service-panier';
import { Observable } from 'rxjs';
import { CompteComponent } from "./compte/compte.component";
import { LoginOublieComponent } from "./login-oublie/login-oublie.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AsyncPipe,
    NgIf,
    HeaderComponent,
    SectionCremeuxComponent,
    SectionLiquideComponent,
    SectionCreationComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    MessagePanierComponent,
    CompteComponent,
    LoginOublieComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'milnaGourmet';
  afficherMessage$!: Observable<boolean>;
  produitAjoute$!: Observable<string>;

  constructor(private servicePanier: ServicePanier) {}

  ngOnInit() {
    this.afficherMessage$ = this.servicePanier.afficherMessage$;
    this.produitAjoute$ = this.servicePanier.produitAjoute$;
  }
}
