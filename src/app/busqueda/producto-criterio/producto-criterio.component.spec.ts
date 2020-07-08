import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCriterioComponent } from './producto-criterio.component';

describe('ProductoCriterioComponent', () => {
  let component: ProductoCriterioComponent;
  let fixture: ComponentFixture<ProductoCriterioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoCriterioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoCriterioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
