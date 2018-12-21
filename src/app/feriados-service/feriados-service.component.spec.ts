import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeriadosServiceComponent } from './feriados-service.component';

describe('FeriadosServiceComponent', () => {
  let component: FeriadosServiceComponent;
  let fixture: ComponentFixture<FeriadosServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeriadosServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeriadosServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
