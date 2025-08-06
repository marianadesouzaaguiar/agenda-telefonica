import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheContatoComponent } from './detalhe-contato.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ContatoServiceComponent } from '../contato.service.component';

describe('DetalheContatoComponent', () => {
  let component: DetalheContatoComponent;
  let fixture: ComponentFixture<DetalheContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalheContatoComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: { get: () => '1' } } }
        },
        {
          provide: ContatoServiceComponent,
          useValue: {
            getContato: () => of({ id: 1, nome: 'João', telefone: '123456789' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar os detalhes do contato', () => {
    expect(component.contato).toBeTruthy();
    expect(component.contato?.nome).toBe('João');
  });
});
