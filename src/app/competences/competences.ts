import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './competences.html',
  styleUrls: ['./competences.scss']
})
export class CompetencesComponent {
  competences: string[] = [
    'Bonne élocution',
    'Rythme verbal, ton',
    'Maitrise des outils de bureautique',
    'Respect du timing'
  ];
}
