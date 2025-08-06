import { TestBed } from '@angular/core/testing';
import { ContatoService } from './contato.service';

describe('ContatoService', () => {
  let service: ContatoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatoService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar um contato com nome e email', () => {
    const contato = service.getContato();
    expect(contato.nome).toBe('João da Silva');
    expect(contato.email).toContain('@');
  });
});
