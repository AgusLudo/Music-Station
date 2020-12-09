import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HarmonyPage } from './harmony.page';

describe('HarmonyPage', () => {
  let component: HarmonyPage;
  let fixture: ComponentFixture<HarmonyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HarmonyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HarmonyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
