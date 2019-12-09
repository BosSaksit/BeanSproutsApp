import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetMoneyAddPage } from './get-money-add.page';

describe('GetMoneyAddPage', () => {
  let component: GetMoneyAddPage;
  let fixture: ComponentFixture<GetMoneyAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMoneyAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetMoneyAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
