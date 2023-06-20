import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddProductsComponent } from './dialog-add-products.component';

describe('DialogAddProductsComponent', () => {
  let component: DialogAddProductsComponent;
  let fixture: ComponentFixture<DialogAddProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddProductsComponent]
    });
    fixture = TestBed.createComponent(DialogAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
