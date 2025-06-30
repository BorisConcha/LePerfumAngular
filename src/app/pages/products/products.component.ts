import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfumeService } from '../../services/perfume.service';
import { PerfumeModel } from '../../models/perfume.model';

@Component({
  selector: 'app-products',
  template: `
    <section id="products" class="py-5 mt-5">
      <div class="container">
        <h2 class="text-center mb-5 text-gradient">Productos</h2>
        
        <!-- FILTROS -->
        <div class="filter-section mb-4">
          <h5>Filtros</h5>
          <form [formGroup]="filterForm" (ngSubmit)="applyFilters()">
            <div class="row">
              <div class="col-md-3">
                <select class="form-select" formControlName="brand">
                  <option value="">Todas las marcas</option>
                  <option value="Chanel">Chanel</option>
                  <option value="Dior">Dior</option>
                  <option value="Versace">Versace</option>
                  <option value="Paco Rabanne">Paco Rabanne</option>
                </select>
              </div>
              <div class="col-md-3">
                <select class="form-select" formControlName="type">
                  <option value="">Tipo de fragancia</option>
                  <option value="Eau de Parfum">Eau de Parfum</option>
                  <option value="Eau de Toilette">Eau de Toilette</option>
                  <option value="Cologne">Cologne</option>
                </select>
              </div>
              <div class="col-md-3">
                <select class="form-select" formControlName="gender">
                  <option value="">Género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Unisex">Unisex</option>
                </select>
              </div>
              <div class="col-md-3">
                <select class="form-select" formControlName="priceRange">
                  <option value="">Rango de precio</option>
                  <option value="0-50000">$0 - $50.000</option>
                  <option value="50000-100000">$50.000 - $100.000</option>
                  <option value="100000+">$100.000+</option>
                </select>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-12">
                <button type="submit" class="btn btn-primary me-2">Aplicar Filtros</button>
                <button type="button" class="btn btn-outline-secondary" (click)="clearFilters()">Limpiar</button>
              </div>
            </div>
          </form>
        </div>

        <!-- Loading Spinner -->
        <div class="loading" *ngIf="loading">
          <div class="spinner"></div>
          <p>Cargando productos...</p>
        </div>

        <!-- LISTA DE PRODUCTOS -->
        <div class="row" *ngIf="!loading">
          <div class="col-xl-3 col-lg-4 col-md-6 col-12" *ngFor="let product of filteredProducts">
            <app-product-card [product]="product"></app-product-card>
          </div>
        </div>

        <!-- No results message -->
        <div class="text-center mt-5" *ngIf="!loading && filteredProducts.length === 0">
          <h4>No se encontraron productos</h4>
          <p>Intenta ajustar los filtros de búsqueda</p>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  filterForm: FormGroup;
  perfumes: PerfumeModel[] = [];
  filteredPerfumes: PerfumeModel[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private perfumeService: PerfumeService
  ) {
    this.filterForm = this.fb.group({
      brand: [''],
      type: [''],
      gender: [''],
      priceRange: ['']
    });
  }

  ngOnInit(): void {
    this.loadProducts();
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFiltros();
    });
  }

  private loadProducts(): void {
    this.loading = true;
    this.perfumeService.getAllProducts().subscribe({
      next: (perfumes) => {
        this.perfumes = perfumes;
        this.filteredPerfumes = perfumes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar los perfumes:', error);
        this.loading = false;
      }
    });
  }

  applyFiltros(): void {
    const filters = this.filterForm.value;
    this.filteredPerfumes = this.perfumes.filter(perfume => {
      return this.matchesFiltro(perfume, filters);
    });
  }

  private matchesFiltro(perfume: PerfumeModel, filters: any): boolean {
    if (filters.brand && perfume.brand !== filters.brand) return false;
    if (filters.type && perfume.type !== filters.type) return false;
    if (filters.gender && perfume.gender !== filters.gender) return false;
    if (filters.priceRange && !this.matchesRangoPrecio(perfume.price, filters.priceRange)) return false;
    return true;
  }

  private matchesRangoPrecio(precio: number, rango: string): boolean {
    switch (rango) {
      case '0-50000':
        return precio >= 0 && precio <= 50000;
      case '50000-100000':
        return precio > 50000 && precio <= 100000;
      case '100000+':
        return precio > 100000;
      default:
        return true;
    }
  }

  clearFilters(): void {
    this.filterForm.reset();
    this.filteredPerfumes = this.perfumes;
  }
}
