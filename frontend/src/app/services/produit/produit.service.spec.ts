import { TestBed } from '@angular/core/testing';

import { ProduitService } from './produit.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ProduitService', () => {
  let service: ProduitService;

  beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(ProduitService);
  });

  it('doit etre créée', () => {
        expect(service).toBeTruthy();
  });
});
