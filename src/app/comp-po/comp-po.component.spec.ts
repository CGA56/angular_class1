import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPoComponent } from './comp-po.component';

fdescribe('CompPoComponent', () => {
  let component: CompPoComponent;
  let fixture: ComponentFixture<CompPoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should transform a text into upperCase', () => {
    expect(component.aMayuscula("hola")).toEqual("HOLA");
  });

  
  /**
     it('should transform a text2 into upperCase2', () => {
    expect(component.aMayuscula("hola como estas")).toEqual("HOLA COMO ESTAS");
  });

   */
 
 
});
