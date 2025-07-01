import { Component, OnInit } from '@angular/core';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brands-section',
  templateUrl: './brands-section.component.html',
  styleUrls: ['./brands-section.component.scss']
})
export class BrandsSectionComponent implements OnInit {
  brands: Brand[] = [];
  filteredBrands: Brand[] = [];
  activeCategory: string = 'all';
  isLoading = true;

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.loadBrands();
  }

  loadBrands(): void {
    this.brandService.getBrands().subscribe({
      next: (brands) => {
        this.brands = brands;
        this.filteredBrands = brands;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading brands:', error);
        this.isLoading = false;
      }
    });
  }

  filterByCategory(category: string): void {
    this.activeCategory = category;
    if (category === 'all') {
      this.filteredBrands = this.brands;
    } else {
      this.filteredBrands = this.brands.filter(brand => brand.category === category);
    }
  }

  onBrandClick(brand: Brand): void {
    // Emit event or navigate to brand detail
    console.log('Brand clicked:', brand);
  }
}
