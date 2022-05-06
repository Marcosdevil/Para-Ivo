import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPostresComponent } from './vista-postres.component';

describe('VistaPostresComponent', () => {
  let component: VistaPostresComponent;
  let fixture: ComponentFixture<VistaPostresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPostresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPostresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
