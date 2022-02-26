import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';

import {ProductListMaterialComponent} from './product-list-material.component';

describe('ProductListMaterialComponent', () => {
  let component: ProductListMaterialComponent;
  let fixture: ComponentFixture<ProductListMaterialComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListMaterialComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
