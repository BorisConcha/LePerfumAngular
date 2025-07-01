import { Component } from '@angular/core';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss']
})
export class FeaturesSectionComponent {
  features: Feature[] = [
    {
      icon: 'fas fa-search',
      title: 'Búsqueda Avanzada',
      description: 'Encuentra perfumes por marca, tipo, precio y características específicas.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Comparación de Precios',
      description: 'Compara precios entre diferentes tiendas y encuentra las mejores ofertas.'
    },
    {
      icon: 'fas fa-star',
      title: 'Reseñas Verificadas',
      description: 'Lee opiniones reales de usuarios y toma decisiones informadas.'
    }
  ];
}
