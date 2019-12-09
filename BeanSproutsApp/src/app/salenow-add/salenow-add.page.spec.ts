import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalenowAddPage } from './salenow-add.page';

describe('SalenowAddPage', () => {
  let component: SalenowAddPage;
  let fixture: ComponentFixture<SalenowAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalenowAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalenowAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
