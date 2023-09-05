import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyStandaloneLibComponent } from './my-standalone-lib.component';

describe('MyStandaloneLibComponent', () => {
  let component: MyStandaloneLibComponent;
  let fixture: ComponentFixture<MyStandaloneLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStandaloneLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyStandaloneLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
