import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetMoneyListPage } from './get-money-list.page';

describe('GetMoneyListPage', () => {
  let component: GetMoneyListPage;
  let fixture: ComponentFixture<GetMoneyListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoneyListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetMoneyListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
