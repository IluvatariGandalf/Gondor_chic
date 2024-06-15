import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilPersoComponent } from './page-accueil-perso.component';

describe('PageAccueilPersoComponent', () => {
  let component: PageAccueilPersoComponent;
  let fixture: ComponentFixture<PageAccueilPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAccueilPersoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAccueilPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
