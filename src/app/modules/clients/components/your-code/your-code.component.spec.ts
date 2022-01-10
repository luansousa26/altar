import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourCodeComponent } from './your-code.component';

describe('YourCodeComponent', () => {
  let component: YourCodeComponent;
  let fixture: ComponentFixture<YourCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YourCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
