import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gr-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToInstagram(): void {
    window.open('https://www.instagram.com/deyvissonbrenoveras.js/?hl=pt');
  }
  goToFacebook(): void {
    window.open('https://www.facebook.com/deyvisson.breno');
  }
  goToWhatsapp(): void {
    window.open(
      'https://api.whatsapp.com/send?phone=83993135207&text=Ol%C3%A1.'
    );
  }
}
