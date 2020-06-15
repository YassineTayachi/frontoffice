import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedTrainingComponent } from './featured-training.component';

describe('FeaturedTrainingComponent', () => {
  let component: FeaturedTrainingComponent;
  let fixture: ComponentFixture<FeaturedTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
