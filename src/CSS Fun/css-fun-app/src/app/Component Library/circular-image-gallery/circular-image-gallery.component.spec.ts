import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularImageGalleryComponent } from './circular-image-gallery.component';

describe('CircularImageGalleryComponent', () => {
  let component: CircularImageGalleryComponent;
  let fixture: ComponentFixture<CircularImageGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularImageGalleryComponent]
    });
    fixture = TestBed.createComponent(CircularImageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
