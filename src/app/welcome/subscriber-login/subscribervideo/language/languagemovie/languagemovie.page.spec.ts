import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguagemoviePage } from './languagemovie.page';

describe('LanguagemoviePage', () => {
  let component: LanguagemoviePage;
  let fixture: ComponentFixture<LanguagemoviePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagemoviePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagemoviePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
