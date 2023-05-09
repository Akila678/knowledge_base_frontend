import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTechnologiesComponent } from './edit-technologies.component';

describe('EditTechnologiesComponent', () => {
  let component: EditTechnologiesComponent;
  let fixture: ComponentFixture<EditTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTechnologiesComponent);
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

function expect(component: EditTechnologiesComponent) {
  throw new Error('Function not implemented.');
}

