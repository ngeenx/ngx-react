import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReactComponent } from './ngx-react.component';

describe('NgxReactComponent', () => {
  let component: NgxReactComponent;
  let fixture: ComponentFixture<NgxReactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxReactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
