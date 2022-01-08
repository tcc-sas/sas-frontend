import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTableTemplateComponent } from './filter-table-template.component';

describe('FilterTableTemplateComponent', () => {
  let component: FilterTableTemplateComponent;
  let fixture: ComponentFixture<FilterTableTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTableTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTableTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
