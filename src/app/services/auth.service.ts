import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<UserModel | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Verificar si hay un usuario logueado en localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSubject.next(JSON.parse(storedUser));
    }
  }

  login(email: string, password: string): Observable<boolean> {
    return new Observable(observer => {
      // Simular llamada a API
      setTimeout(() => {
        // Validación simple (en producción esto sería una llamada HTTP)
        if (email && password) {
          const user: UserModel = {
            id: 1,
            name: 'Usuario Demo',
            email: email,
            role: 'Cliente',
            createdAt: new Date()
          };
          
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }

  register(userData: any): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        // Simular registro exitoso
        const user: UserModel = {
          id: Date.now(),
          name: userData.name,
          email: userData.email,
          role: userData.role,
          createdAt: new Date()
        };
        
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): UserModel | null {
    return this.currentUserSubject.value;
  }

  forgotPassword(email: string): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        // Simular envío de email
        observer.next(true);
        observer.complete();
      }, 1000);
    });
  }

  updateProfile(userData: any): Observable<boolean> {
    return new Observable(observer => {
      setTimeout(() => {
        const currentUser = this.getCurrentUser();
        if (currentUser) {
          const updatedUser = { ...currentUser, ...userData };
          localStorage.setItem('currentUser', JSON.stringify(updatedUser));
          this.currentUserSubject.next(updatedUser);
          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      }, 1000);
    });
  }
}