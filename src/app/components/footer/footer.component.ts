import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  onNewsletterSubmit(email: string): void {
    if (email) {
      console.log('Newsletter subscription:', email);
    }
  }
}
