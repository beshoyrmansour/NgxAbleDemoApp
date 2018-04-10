import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatcontentComponent } from './chatcontent.component';

describe('ChatcontentComponent', () => {
  let component: ChatcontentComponent;
  let fixture: ComponentFixture<ChatcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
