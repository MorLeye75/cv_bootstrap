import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  poste: string;
  periode: string;
  entreprise: string;
  lieu: string;
  taches: string[];
}

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.html',
  styleUrls: ['./experiences.scss']
})
export class ExperiencesComponent {
  experiences: Experience[] = [
    {
      poste: 'Téléconseillère',
      periode: 'Mars 2018 - Présent',
      entreprise: 'Majorel',
      lieu: 'Dakar',
      taches: [
        'Conseiller et assister les clients au téléphone.',
        'Répondre aux demandes clients et les accompagner jusqu\'à la résolution de leur problème.',
        'Gérer les fichiers et les comptes des clients',
        'Réaliser des enquêtes au téléphone, faire de la prospection ou la prise de rendez-vous.',
        'Proposer de nouveaux services ou offres aux clients pour les fidéliser.'
      ]
    },
    {
      poste: 'Téléconseillère',
      periode: 'Janvier 2017 - Février 2018',
      entreprise: 'Sitel Group',
      lieu: 'Dakar',
      taches: [
        'Conseiller et assister les clients au téléphone.',
        'Répondre aux demandes clients et les accompagner jusqu\'à la résolution de leur problème.',
        'Gérer les fichiers et les comptes des clients',
        'Réaliser des enquêtes au téléphone, faire de la prospection ou la prise de rendez-vous.',
        'Proposer de nouveaux services ou offres aux clients pour les fidéliser.'
      ]
    }
  ];
}
