import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateInvoiceComponent } from './create-invoice.component';

describe('CreatepageComponent', () => {
  let component: CreateInvoiceComponent;
  let fixture: ComponentFixture<CreateInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
