import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitBlockSmallComponent } from './produit-block-small.component';

describe('ProduitBlockSmallComponent', () => {
  let component: ProduitBlockSmallComponent;
  let fixture: ComponentFixture<ProduitBlockSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitBlockSmallComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitBlockSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
