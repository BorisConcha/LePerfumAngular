import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  @Output() searchTerm = new EventEmitter<string>();
  
  searchInput = '';

  onSearch(): void {
    if (this.searchInput.trim()) {
      this.searchTerm.emit(this.searchInput.trim());
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.onSearch();
    }
  }
}