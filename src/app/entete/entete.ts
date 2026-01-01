import { Component } from '@angular/core';

@Component({
  selector: 'entete-cv',
  templateUrl: './entete.html',
  styleUrls: ['./entete.scss'],
  standalone: true,
})
export class EnteteComponent {
  photoUrl: string = 'assets/cv.png';
  
  onImageError(event: any) {
    event.target.src = 'https://via.placeholder.com/150x180/3D3A35/E2E7FA?text=Photo';
  }
}
