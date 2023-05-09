import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTechnologiesComponent } from './add-technologies.component';

describe('AddTechnologiesComponent', () => {
  let component: AddTechnologiesComponent;
  let fixture: ComponentFixture<AddTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

