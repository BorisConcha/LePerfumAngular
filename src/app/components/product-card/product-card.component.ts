
import { Component, Input } from '@angular/core';
import { PerfumeModel } from '../../models/perfume.model';

@Component({
  selector: 'app-product-card',
  template: `
    <div class="product-card">
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name" />
      </div>
      <div class="product-info">
        <h5 class="product-title">{{ product.name }}</h5>
        <p class="product-brand">{{ product.brand }}</p>
        <div class="product-price">{{ product.price | currency:'CLP':'symbol':'1.0-0' }}</div>
        <div class="product-actions">
          <button class="btn btn-primary btn-sm" (click)="viewDetails()">Ver Detalles</button>
          <div class="product-rating">
            <i class="fas fa-star" *ngFor="let star of getStars(product.rating)" [class.far]="!star"></i>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.css']
})
export class PerfumesCardComponent {
  @Input() perfume!: PerfumeModel;

  viewDetails(): void {
    console.log('Viendo los detalles del perfume:', this.perfume.name);
    // Implementar navegación a detalles del producto
  }

  getStars(rating: number): boolean[] {
    const stars: boolean[] = [];
    const fullStars = Math.floor(rating);
    
    for (let i = 0; i < 5; i++) {
      stars.push(i < fullStars);
    }
    
    return stars;
  }
}