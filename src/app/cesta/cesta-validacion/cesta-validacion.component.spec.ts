import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaValidacionComponent } from './cesta-validacion.component';

describe('CestaValidacionComponent', () => {
  let component: CestaValidacionComponent;
  let fixture: ComponentFixture<CestaValidacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaValidacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaValidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
