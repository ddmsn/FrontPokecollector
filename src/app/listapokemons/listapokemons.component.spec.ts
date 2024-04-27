import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapokemonsComponent } from './listapokemons.component';

describe('ListapokemonsComponent', () => {
  let component: ListapokemonsComponent;
  let fixture: ComponentFixture<ListapokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListapokemonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListapokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
