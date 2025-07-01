import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Brand {
  id: string;
  name: string;
  logo: string;
  category: 'luxury' | 'designer' | 'niche' | 'all';
  description: string;
  country: string;
  founded: number;
  productsCount: number;
}

@Component({
  selector: 'app-brand-card',
  templateUrl: './brand-card.component.html',
  styleUrls: ['./brand-card.component.scss']
})
export class BrandCardComponent {
  @Input() brand!: Brand;
  @Output() brandClick = new EventEmitter<Brand>();

  onBrandClick(): void {
    this.brandClick.emit(this.brand);
  }
}
