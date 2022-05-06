import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPizzasComponent } from './vista-pizzas.component';

describe('VistaPizzasComponent', () => {
  let component: VistaPizzasComponent;
  let fixture: ComponentFixture<VistaPizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaPizzasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
