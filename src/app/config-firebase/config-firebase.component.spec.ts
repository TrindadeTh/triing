import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigFirebaseComponent } from './config-firebase.component';

describe('ConfigFirebaseComponent', () => {
  let component: ConfigFirebaseComponent;
  let fixture: ComponentFixture<ConfigFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
