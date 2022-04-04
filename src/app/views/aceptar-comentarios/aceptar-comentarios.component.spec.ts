import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AceptarComentariosComponent } from './aceptar-comentarios.component';

describe('AceptarComentariosComponent', () => {
  let component: AceptarComentariosComponent;
  let fixture: ComponentFixture<AceptarComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AceptarComentariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
