import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenremoviePage } from './genremovie.page';

describe('GenremoviePage', () => {
  let component: GenremoviePage;
  let fixture: ComponentFixture<GenremoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenremoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenremoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
