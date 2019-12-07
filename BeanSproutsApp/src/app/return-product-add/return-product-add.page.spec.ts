import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReturnProductAddPage } from './return-product-add.page';

describe('ReturnProductAddPage', () => {
  let component: ReturnProductAddPage;
  let fixture: ComponentFixture<ReturnProductAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnProductAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReturnProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
