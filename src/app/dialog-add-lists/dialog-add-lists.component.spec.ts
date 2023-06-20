import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddListsComponent } from './dialog-add-lists.component';

describe('DialogAddListsComponent', () => {
  let component: DialogAddListsComponent;
  let fixture: ComponentFixture<DialogAddListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogAddListsComponent]
    });
    fixture = TestBed.createComponent(DialogAddListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
