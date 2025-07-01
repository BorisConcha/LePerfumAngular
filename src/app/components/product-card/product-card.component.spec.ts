import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfumesCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: PerfumesCardComponent;
  let fixture: ComponentFixture<PerfumesCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfumesCardComponent]
    });
    fixture = TestBed.createComponent(PerfumesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
