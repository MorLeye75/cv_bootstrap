import { Component } from '@angular/core';

@Component({
  selector: 'app-langues',
  templateUrl: './langues.html',
  styleUrls: ['./langues.scss']
  // PAS de standalone: true
})
export class LanguesComponent {
  langues: string[] = [
    'Français',
    'Anglais',
    'Pulaar'
  ];
}