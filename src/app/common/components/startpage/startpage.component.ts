import { Component } from '@angular/core';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.component.html',
  styleUrls: ['./startpage.component.scss']
})
export class StartpageComponent {

  buttonLabels: string[] = ['E-handel', 'Tjänstehantering och schemaläggning', 'Hemsida', 'Statistik och analys', 'Mobilapplikation', 'Intern Kommunikation', 'Finans'];

  services = [
    { text: 'Webb.', imageUrl: '../../../../assets/images/webb.png' },
    { text: 'Internt.', imageUrl: '../../../../assets/images/internt.png' },
    { text: 'Mobilt.', imageUrl: '../../../../assets/images/mobile.png' },
  ];

  images = [
    '../../../../assets/images/dashboard.png',
    '../../../../assets/images/internt.png',
    '../../../../assets/images/webb.png',
    '../../../../assets/images/internt.png',
    '../../../../assets/images/webb.png',
    '../../../../assets/images/internt.png',
    '../../../../assets/images/webb.png',
  ];

  currentImage: string = this.images[0]; 
  isFading: boolean = false;

  constructor() {}

  changeImage(index: number) {
    this.isFading = true;
    setTimeout(() => {
      this.currentImage = this.images[index];
      this.isFading = false;
    }, 500); 
  }
}