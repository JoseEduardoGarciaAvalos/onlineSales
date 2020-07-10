import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaGestionComponent } from './cesta-gestion.component';

describe('CestaGestionComponent', () => {
  let component: CestaGestionComponent;
  let fixture: ComponentFixture<CestaGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
