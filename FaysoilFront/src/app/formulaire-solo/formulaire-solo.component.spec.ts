import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSoloComponent } from './formulaire-solo.component';

describe('FormulaireSoloComponent', () => {
  let component: FormulaireSoloComponent;
  let fixture: ComponentFixture<FormulaireSoloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireSoloComponent]
    });
    fixture = TestBed.createComponent(FormulaireSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
