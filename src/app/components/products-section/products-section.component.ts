import { Component, OnInit } from '@angular/core';
import { PerfumeService } from '../../services/perfume.service';
import { ProductFilters } from '../filters/filters.component';
import { PerfumeModel } from '../../models/perfume.model';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.scss']
})
export class ProductsSectionComponent implements OnInit {
  products: PerfumeModel[] = [];
  filteredProducts: ProductFilters[] = [];
  isLoading = true;
  currentFilters: ProductFilters = {
    brand: '',
    type: '',
    gender: '',
    priceRange: '',
    searchTerm: ''
  };

  constructor(private perfumeService: PerfumeService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.perfumeService.getPerfumes().subscribe({
      next: (products) => {
        this.products = products;
        this.applyFilters();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error al cargar los perfumes:', error);
        this.isLoading = false;
      }
    });
  }

  onFiltersChange(filters: ProductFilters): void {
    this.currentFilters = filters;
    this.applyFilters();
  }

  onProductClick(product: PerfumeModel): void {
    // Navigate to product detail or show modal
    console.log('Perfume Clickeado:', product);
  }

  private applyFilters(): void {
    this.filteredProducts = this.products.filter(product => {
      return this.matchesFilters(product, this.currentFilters);
    });
  }

  private matchesFilters(product: PerfumeModel, filters: ProductFilters): boolean {
    if (filters.brand && product.brand.toLowerCase() !== filters.brand) {
      return false;
    }
    if (filters.type && product.type.toLowerCase().replace(/\s+/g, '-') !== filters.type) {
      return false;
    }
    if (filters.gender && product.gender.toLowerCase() !== filters.gender) {
      return false;
    }
    if (filters.priceRange && !this.matchesPriceRange(product.price, filters.priceRange)) {
      return false;
    }
    if (filters.searchTerm && !this.matchesSearchTerm(product, filters.searchTerm)) {
      return false;
    }
    return true;
  }

  private matchesPriceRange(price: number, range: string): boolean {
    if (!range) return true;
    
    if (range === '100000+') {
      return price >= 100000;
    }
    
    const [min, max] = range.split('-').map(Number);
    return price >= min && price <= max;
  }

  private matchesSearchTerm(product: PerfumeModel, term: string): boolean {
    const searchTerm = term.toLowerCase();
    return product.name.toLowerCase().includes(searchTerm) ||
           product.brand.toLowerCase().includes(searchTerm) ||
           product.type.toLowerCase().includes(searchTerm);
  }
}
