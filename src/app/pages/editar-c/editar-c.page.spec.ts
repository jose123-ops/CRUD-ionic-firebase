import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarCPage } from './editar-c.page';

describe('EditarCPage', () => {
  let component: EditarCPage;
  let fixture: ComponentFixture<EditarCPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
