import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitDuJourBlockComponent } from './produit-du-jour-block.component';

describe('ProduitDuJourBlockComponent', () => {
  let component: ProduitDuJourBlockComponent;
  let fixture: ComponentFixture<ProduitDuJourBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitDuJourBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitDuJourBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
