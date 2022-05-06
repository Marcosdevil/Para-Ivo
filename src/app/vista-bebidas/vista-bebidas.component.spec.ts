import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaBebidasComponent } from './vista-bebidas.component';

describe('VistaBebidasComponent', () => {
  let component: VistaBebidasComponent;
  let fixture: ComponentFixture<VistaBebidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaBebidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaBebidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
