import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoKeywordComponent } from './producto-keyword.component';

describe('ProductoKeywordComponent', () => {
  let component: ProductoKeywordComponent;
  let fixture: ComponentFixture<ProductoKeywordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductoKeywordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductoKeywordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
