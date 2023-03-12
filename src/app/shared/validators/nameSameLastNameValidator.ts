import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const nameSameLastNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('name');
  const lastName = control.get('lastName');

  return name && lastName && (name.value === lastName.value && name.value !== null) ? { nameSameLastName: true } : null;
};
