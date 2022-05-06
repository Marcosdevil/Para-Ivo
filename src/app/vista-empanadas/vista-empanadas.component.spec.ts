import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaEmpanadasComponent } from './vista-empanadas.component';

describe('VistaEmpanadasComponent', () => {
  let component: VistaEmpanadasComponent;
  let fixture: ComponentFixture<VistaEmpanadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaEmpanadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEmpanadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
