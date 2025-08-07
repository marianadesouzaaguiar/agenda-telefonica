import { TestBed } from '@angular/core/testing';
import { FavoritosComponent } from './favoritos.component';

describe('FavoritosComponent2', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoritosComponent], // ✅ trocar declarations por imports
      // declarations: [FavoritosComponent2], <-- REMOVER
    }).compileComponents();
  });

  it('deve criar o componente', () => {
    const fixture = TestBed.createComponent(FavoritosComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
