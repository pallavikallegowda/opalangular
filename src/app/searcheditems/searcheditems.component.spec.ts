import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcheditemsComponent } from './searcheditems.component';

describe('SearcheditemsComponent', () => {
  let component: SearcheditemsComponent;
  let fixture: ComponentFixture<SearcheditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcheditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcheditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
