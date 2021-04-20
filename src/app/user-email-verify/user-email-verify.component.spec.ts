import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEmailVerifyComponent } from './user-email-verify.component';

describe('UserEmailVerifyComponent', () => {
  let component: UserEmailVerifyComponent;
  let fixture: ComponentFixture<UserEmailVerifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserEmailVerifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEmailVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
