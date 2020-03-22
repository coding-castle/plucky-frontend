import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFarmComponent } from './profile-farm.component';

describe('ProfileFarmComponent', () => {
  let component: ProfileFarmComponent;
  let fixture: ComponentFixture<ProfileFarmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFarmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
