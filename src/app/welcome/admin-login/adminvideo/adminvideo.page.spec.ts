import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminvideoPage } from './adminvideo.page';

describe('AdminvideoPage', () => {
  let component: AdminvideoPage;
  let fixture: ComponentFixture<AdminvideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminvideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminvideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
