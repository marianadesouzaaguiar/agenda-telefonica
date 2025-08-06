import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormContatoComponent } from './form-contato.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContatoService } from '../../services/contato.service';

describe('FormContatoComponent', () => {
  let component: FormContatoComponent;
  let fixture: ComponentFixture<FormContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormContatoComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: ContatoService,
          useValue: {
            adicionarContato: () => {},
            atualizarContato: () => {}
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FormContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('form inválido quando vazio', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('form válido com dados preenchidos', () => {
    component.form.setValue({ nome: 'Maria', telefone: '123456789' });
    expect(component.form.valid).toBeTruthy();
  });
});
