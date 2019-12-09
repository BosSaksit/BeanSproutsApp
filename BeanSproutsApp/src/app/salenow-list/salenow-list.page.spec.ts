import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SalenowListPage } from './salenow-list.page';

describe('SalenowListPage', () => {
  let component: SalenowListPage;
  let fixture: ComponentFixture<SalenowListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalenowListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SalenowListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
