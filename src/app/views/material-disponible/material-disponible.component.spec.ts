import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDisponibleComponent } from './material-disponible.component';

describe('MaterialDisponibleComponent', () => {
  let component: MaterialDisponibleComponent;
  let fixture: ComponentFixture<MaterialDisponibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialDisponibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDisponibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
