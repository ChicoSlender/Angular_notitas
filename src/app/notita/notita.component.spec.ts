import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotitaComponent } from './notita.component';

describe('NotitaComponent', () => {
  let component: NotitaComponent;
  let fixture: ComponentFixture<NotitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
