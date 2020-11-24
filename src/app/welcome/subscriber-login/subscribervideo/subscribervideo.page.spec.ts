import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscribervideoPage } from './subscribervideo.page';

describe('SubscribervideoPage', () => {
  let component: SubscribervideoPage;
  let fixture: ComponentFixture<SubscribervideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribervideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscribervideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
