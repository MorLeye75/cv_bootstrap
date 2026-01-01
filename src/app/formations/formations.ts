import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Formation {
  titre: string;
  annee: string;
  etablissement: string;
  description: string;
}

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './formations.html',
  styleUrls: ['./formations.scss']
})
export class FormationsComponent {
  formations: Formation[] = [
    {
      titre: 'Licence en Marketing et Communication',
      annee: '2017',
      etablissement: 'Université Cheikh Anta Diop de Dakar',
      description: 'Décrivez cette formation en une ligne'
    },
    {
      titre: 'Baccalauréat',
      annee: '2017',
      etablissement: 'Lycée de Grand-Dakar',
      description: 'Décrivez cette formation en une ligne'
    }
  ];
}
