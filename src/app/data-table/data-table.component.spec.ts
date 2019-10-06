import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableComponent } from './data-table.component';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display the data list', () => {
    expect(component.ELEMENT_DATA).toBeTruthy();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    fixture.detectChanges();
    let tableRows = fixture.nativeElement.querySelectorAll('tr');
    expect(tableRows.length).toBe(3);
    // Header row
    let headerRow = tableRows[0];
    expect(headerRow.cells[0].innerHTML).toBe('id');
    expect(headerRow.cells[1].innerHTML).toBe('Title');
    expect(headerRow.cells[2].innerHTML).toBe('Image');
    });
  });
});
