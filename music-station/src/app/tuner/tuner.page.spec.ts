import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TunerPage } from './tuner.page';

describe('TunerPage', () => {
  let component: TunerPage;
  let fixture: ComponentFixture<TunerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TunerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TunerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
