import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaCPage } from './lista-c.page';

describe('ListaCPage', () => {
  let component: ListaCPage;
  let fixture: ComponentFixture<ListaCPage>;

  beforeEach((() => {
    fixture = TestBed.createComponent(ListaCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
