import { Component, EventEmitter, Output, OnInit } from '@angular/core';

export interface ProductFilters {
  brand: string;
  type: string;
  gender: string;
  priceRange: string;
  searchTerm: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() filtersChange = new EventEmitter<ProductFilters>();

  filters: ProductFilters = {
    brand: '',
    type: '',
    gender: '',
    priceRange: '',
    searchTerm: ''
  };

  brands = [
    { value: '', label: 'Todas las marcas' },
    { value: 'chanel', label: 'Chanel' },
    { value: 'dior', label: 'Dior' },
    { value: 'versace', label: 'Versace' },
    { value: 'paco-rabanne', label: 'Paco Rabanne' }
  ];

  types = [
    { value: '', label: 'Tipo de fragancia' },
    { value: 'eau-de-parfum', label: 'Eau de Parfum' },
    { value: 'eau-de-toilette', label: 'Eau de Toilette' },
    { value: 'cologne', label: 'Cologne' }
  ];

  genders = [
    { value: '', label: 'Género' },
    { value: 'masculino', label: 'Masculino' },
    { value: 'femenino', label: 'Femenino' },
    { value: 'unisex', label: 'Unisex' }
  ];

  priceRanges = [
    { value: '', label: 'Rango de precio' },
    { value: '0-50000', label: '$0 - $50.000' },
    { value: '50000-100000', label: '$50.000 - $100.000' },
    { value: '100000+', label: '$100.000+' }
  ];

  ngOnInit(): void {
    this.emitFilters();
  }

  onFilterChange(): void {
    this.emitFilters();
  }

  private emitFilters(): void {
    this.filtersChange.emit({ ...this.filters });
  }

  clearFilters(): void {
    this.filters = {
      brand: '',
      type: '',
      gender: '',
      priceRange: '',
      searchTerm: ''
    };
    this.emitFilters();
  }
}

