import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SectionCremeuxComponent } from "./section-cremeux/section-cremeux.component";
import { SectionLiquideComponent } from "./section-liquide/section-liquide.component";
import { SectionCreationComponent } from "./section-creation/section-creation.component";
import { FooterComponent } from "./footer/footer.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SectionCremeuxComponent, SectionLiquideComponent, SectionCreationComponent, FooterComponent, RegisterComponent, LoginComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'milnaGourmet';

}
