import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnProductListPage } from './return-product-list.page';

describe('ReturnProductListPage', () => {
  let component: ReturnProductListPage;
  let fixture: ComponentFixture<ReturnProductListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProductListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
