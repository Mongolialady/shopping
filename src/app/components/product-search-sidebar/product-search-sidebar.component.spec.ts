import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSearchSidebarComponent } from './product-search-sidebar.component';

describe('ProductSearchSidebarComponent', () => {
  let component: ProductSearchSidebarComponent;
  let fixture: ComponentFixture<ProductSearchSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSearchSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSearchSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
