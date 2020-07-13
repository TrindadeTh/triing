import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigContadorComponent } from './config-contador.component';

describe('ConfigContadorComponent', () => {
  let component: ConfigContadorComponent;
  let fixture: ComponentFixture<ConfigContadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigContadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigContadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
