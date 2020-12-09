import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MelodyPage } from './melody.page';

describe('MelodyPage', () => {
  let component: MelodyPage;
  let fixture: ComponentFixture<MelodyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MelodyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MelodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
