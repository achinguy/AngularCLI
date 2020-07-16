import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPanelComponent } from './global-panel.component';

describe('GlobalPanelComponent', () => {
  let component: GlobalPanelComponent;
  let fixture: ComponentFixture<GlobalPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
