import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PerfumeModel } from '../models/perfume.model';

@Injectable({
  providedIn: 'root'
})
export class PerfumeService {
  // private apiUrl = 'assets/data/perfumes.json';
  private loadingSubject = new BehaviorSubject<boolean>(false);

  private perfumes: PerfumeModel[] = [
    {
      id: 1,
      name: 'Chanel No. 5',
      brand: 'Chanel',
      price: 89990,
      image: '../images/chanel5.webp',
      rating: 5,
      type: 'Eau de Parfum',
      gender: 'Femenino',
      description: 'El perfume más icónico de Chanel',
      available: true
    },
    {
      id: 2,
      name: 'Sauvage',
      brand: 'Dior',
      price: 79990,
      image: '../images/sauvage.webp',
      rating: 4,
      type: 'Eau de Toilette',
      gender: 'Masculino',
      description: 'Fragancia fresca y moderna de Dior',
      available: true
    },
    {
      id: 3,
      name: 'Eros',
      brand: 'Versace',
      price: 65990,
      image: '../images/eros.png',
      rating: 5,
      type: 'Eau de Toilette',
      gender: 'Masculino',
      description: 'Fragancia seductora y poderosa',
      available: true
    },
    {
      id: 4,
      name: '1 Million',
      brand: 'Paco Rabanne',
      price: 55990,
      image: '../images/onemillion.webp',
      rating: 4,
      type: 'Eau de Toilette',
      gender: 'Masculino',
      description: 'El aroma del éxito',
      available: true
    }
  ];

  constructor(private http: HttpClient) { }

  getPerfumes(): Observable<PerfumeModel[]> {
    return of(this.perfumes).pipe(delay(500));
  }

  getFeaturedPerfumes(): Observable<PerfumeModel[]> {
    return of(this.perfumes.slice(0, 4)).pipe(delay(500));
  }

  getPerfumeById(id: number): Observable<PerfumeModel | undefined> {
    const product = this.perfumes.find(p => p.id === id);
    return of(product).pipe(delay(300));
  }

  searchPerfumes(searchTerm: string): Observable<PerfumeModel[]> {
    const filtered = this.perfumes.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return of(filtered).pipe(delay(500));
  }

  getPerfumesByBrand(brand: string): Observable<PerfumeModel[]> {
    const filtered = this.perfumes.filter(product => product.brand === brand);
    return of(filtered).pipe(delay(500));
  }

  get loading$() {
    return this.loadingSubject.asObservable();
  }
}