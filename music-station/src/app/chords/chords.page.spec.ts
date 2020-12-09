import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChordsPage } from './chords.page';

describe('ChordsPage', () => {
  let component: ChordsPage;
  let fixture: ComponentFixture<ChordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChordsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
