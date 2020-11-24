import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SubscriberLoginPage } from './subscriber-login.page';

describe('SubscriberLoginPage', () => {
  let component: SubscriberLoginPage;
  let fixture: ComponentFixture<SubscriberLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriberLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriberLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
