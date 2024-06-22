import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TelaProximaPage } from './tela-proxima.page';

describe('TelaProximaPage', () => {
  let component: TelaProximaPage;
  let fixture: ComponentFixture<TelaProximaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaProximaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
