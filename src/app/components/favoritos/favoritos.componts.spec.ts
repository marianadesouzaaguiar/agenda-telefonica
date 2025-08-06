import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavoritosComponent } from './favoritos.component';
import { ContatoService } from '../../services/contato.service';
import { of } from 'rxjs';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritosComponent],
      providers: [
        {
          provide: ContatoService,
          useValue: {
            getContatosFavoritos: () => of([
              { id: 1, nome: 'Ana', telefone: '1111', favorito: true }
            ])
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve carregar contatos favoritos', () => {
    expect(component.contatos.length).toBeGreaterThan(0);
    expect(component.contatos[0].favorito).toBeTrue();
  });
});
