import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContato } from './form-contato';

describe('FormContato', () => {
  let component: FormContato;
  let fixture: ComponentFixture<FormContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
