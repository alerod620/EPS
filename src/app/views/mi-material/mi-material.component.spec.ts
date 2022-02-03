import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiMaterialComponent } from './mi-material.component';

describe('MiMaterialComponent', () => {
  let component: MiMaterialComponent;
  let fixture: ComponentFixture<MiMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
