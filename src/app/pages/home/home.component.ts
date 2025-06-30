
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PerfumeService } from '../../services/perfume.service';
import { PerfumeModel } from '../../models/perfume.model';

@Component({
  selector: 'app-home',
  template: `
    <!-- SECCIÓN DE BUSCADOR -->
    <section id="home" class="hero-section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class="hero-title">Encuentra tu Fragancia Perfecta</h1>
            <p class="hero-subtitle">Compara precios, lee reseñas y descubre los mejores perfumes del mercado</p>
            <div class="search-container">
              <form [formGroup]="searchForm" (ngSubmit)="onSearch()">
                <div class="d-flex flex-column flex-md-row">
                  <input 
                    type="text" 
                    class="form-control search-input flex-grow-1" 
                    placeholder="Buscar perfume, marca o tipo..."
                    formControlName="searchTerm">
                  <button class="btn search-btn" type="submit">
                    <i class="fas fa-search me-2"></i>Buscar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN DE LAS CARACTERÍSTICAS -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-search"></i>
              </div>
              <h3>Búsqueda Avanzada</h3>
              <p>Encuentra perfumes por marca, tipo, precio y características específicas.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-chart-line"></i>
              </div>
              <h3>Comparación de Precios</h3>
              <p>Compara precios entre diferentes tiendas y encuentra las mejores ofertas.</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="feature-card">
              <div class="feature-icon">
                <i class="fas fa-star"></i>
              </div>
              <h3>Reseñas Verificadas</h3>
              <p>Lee opiniones reales de usuarios y toma decisiones informadas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECCIÓN DE PRODUCTOS DESTACADOS -->
    <section class="py-5">
      <div class="container">
        <h2 class="text-center mb-5 text-gradient">Productos Destacados</h2>
        
        <div class="loading" *ngIf="loading">
          <div class="spinner"></div>
          <p>Cargando productos...</p>
        </div>

        <div class="row" *ngIf="!loading">
          <div class="col-xl-3 col-lg-4 col-md-6 col-12" *ngFor="let product of featuredProducts">
            <app-product-card [product]="product"></app-product-card>
          </div>
        </div>
      </div>
    </section>

    <!-- Modales de autenticación -->
    <app-auth-modals></app-auth-modals>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  featuredPerfumes: PerfumeModel[] = [];
  loading = false;

  constructor(
    private fb: FormBuilder,
    private perfumeService: PerfumeService
  ) {
    this.searchForm = this.fb.group({
      searchTerm: ['']
    });
  }

  ngOnInit(): void {
    this.loadFeaturedPerfumes();
  }

  onSearch(): void {
    const searchTerm = this.searchForm.get('searchTerm')?.value;
    if (searchTerm.trim()) {
      // Navegar a la página de productos con el término de búsqueda
      // Router.navigate(['/products'], { queryParams: { search: searchTerm } });
      console.log('Searching for:', searchTerm);
    }
  }

  private loadFeaturedPerfumes(): void {
    this.loading = true;
    this.perfumeService.getFeaturedPerfumes().subscribe({
      next: (perfumes) => {
        this.featuredPerfumes = perfumes;
        this.loading = false;
      },
      error: (error) => {
        console.error('Error al cargar los perfumes:', error);
        this.loading = false;
      }
    });
  }
}
