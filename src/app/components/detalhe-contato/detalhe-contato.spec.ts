import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheContato } from './detalhe-contato';

describe('DetalheContato', () => {
  let component: DetalheContato;
  let fixture: ComponentFixture<DetalheContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheContato]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheContato);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
