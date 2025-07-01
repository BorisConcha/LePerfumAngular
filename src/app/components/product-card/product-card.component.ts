
import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  rating: number;
  type: string;
  gender: string;
}

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() productClick = new EventEmitter<Product>();

  onProductClick(): void {
    this.productClick.emit(this.product);
  }

  getRatingArray(): number[] {
    return Array(5).fill(0).map((_, i) => i + 1);
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0
    }).format(price);
  }
}