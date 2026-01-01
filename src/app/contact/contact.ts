import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  telephone = '77 100 20 30 / 76 100 20 30';
  email = 'absa@emploidakar.com';
  adresse = 'Rue Kaolack, Point E, Dakar';
}
