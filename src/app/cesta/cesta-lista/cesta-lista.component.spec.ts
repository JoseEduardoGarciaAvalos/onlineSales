import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CestaListaComponent } from './cesta-lista.component';

describe('CestaListaComponent', () => {
  let component: CestaListaComponent;
  let fixture: ComponentFixture<CestaListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CestaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CestaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
