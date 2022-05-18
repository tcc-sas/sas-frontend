import { AbstractControl, Validators } from '@angular/forms';

export function ValidateObject(control: AbstractControl) {
  if (Object.values(control.value).every((value) => value)) {
    return null;
  }
  return { invalidObject: true };
}

export function ConditionalPasswordRequired(control: AbstractControl) {
  if (control.parent?.get('id')?.value) {
    return null;
  }
  return Validators.required(control);
}