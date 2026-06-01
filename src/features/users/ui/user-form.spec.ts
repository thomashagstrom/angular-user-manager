import { TestBed } from '@angular/core/testing';
import { UserForm } from './user-form';

describe('UserForm', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForm],
    }).compileComponents();
  });

  it('emits the saved user when the form is submitted', () => {
    const fixture = TestBed.createComponent(UserForm);
    const component = fixture.componentInstance;
    const emitSpy = vi.spyOn(component.userSaved, 'emit');

    fixture.detectChanges();
    component.userForm().value.set({
      userName: 'Alice',
      firstName: 'Alice',
      lastName: 'Smith',
      enabled: true,
      email: 'alice@test.com',
    });
    fixture.detectChanges();

    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(emitSpy).toHaveBeenCalledWith({
      userName: 'Alice',
      firstName: 'Alice',
      lastName: 'Smith',
      enabled: true,
      email: 'alice@test.com',
    });
  });
});
