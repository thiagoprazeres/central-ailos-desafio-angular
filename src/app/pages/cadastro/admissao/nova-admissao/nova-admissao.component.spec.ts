import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaAdmissaoComponent } from './nova-admissao.component';

describe('NovaAdmissaoComponent', () => {
  let component: NovaAdmissaoComponent;
  let fixture: ComponentFixture<NovaAdmissaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaAdmissaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovaAdmissaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
