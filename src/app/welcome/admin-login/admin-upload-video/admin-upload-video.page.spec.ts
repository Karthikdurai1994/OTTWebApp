import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminUploadVideoPage } from './admin-upload-video.page';

describe('AdminUploadVideoPage', () => {
  let component: AdminUploadVideoPage;
  let fixture: ComponentFixture<AdminUploadVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUploadVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminUploadVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
