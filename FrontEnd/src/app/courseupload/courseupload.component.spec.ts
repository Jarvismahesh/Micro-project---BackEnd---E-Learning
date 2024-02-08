import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseuploadComponent } from './courseupload.component';

describe('CourseuploadComponent', () => {
  let component: CourseuploadComponent;
  let fixture: ComponentFixture<CourseuploadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseuploadComponent]
    });
    fixture = TestBed.createComponent(CourseuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
