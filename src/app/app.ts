import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import de tous les composants standalone que tu as créés
import { EnteteComponent } from './entete/entete';
import { ContactComponent } from './contact/contact';
import { CompetencesComponent } from './competences/competences';
import { LanguesComponent } from './langues/langues';   // à créer si pas encore
import { ExperiencesComponent } from './experiences/experiences';
import { FormationsComponent } from './formations/formations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    EnteteComponent,
    ContactComponent,
    CompetencesComponent,
    LanguesComponent,
    ExperiencesComponent,
    FormationsComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  protected readonly title = signal('cv_bootstrap');
}
