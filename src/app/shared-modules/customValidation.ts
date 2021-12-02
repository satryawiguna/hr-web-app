import { AbstractControl, ValidationErrors } from '@angular/forms';
import { PhoneNumberUtil } from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();

export function UrlValidation(control: AbstractControl): ValidationErrors | null {
  const regEx = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  if (!regEx.test(control.value) && control.value) {
    return { urlValidation: false };
  }
  return null;
}
export function AlphaNumericValidation(control: AbstractControl): ValidationErrors | null {
  const regEx = /^[a-zA-Z0-9]+$/gi;
  if (!regEx.test(control.value) && control.value) {
    return { alphaNumericValidation: false };
  }
  return null;
}
export function AlphabeticValidation(control: AbstractControl): ValidationErrors | null {
  const regEx = /^[a-zA-Z]+$/gi;
  if (!regEx.test(control.value) && control.value) {
    return { alphebeticValidation: false };
  }
  return null;
}
export function NumericValidation(control: AbstractControl): ValidationErrors | null {
  const regEx = /^[0-9]+$/gi;
  if (!regEx.test(control.value) && control.value) {
    return { numericValidation: false };
  }
  return null;
}
export function PhoneNumberValidation(control: AbstractControl): ValidationErrors | null {
  try {
    const phoneNumber = phoneUtil.parse(control.value);
    if (control.value && !phoneUtil.isValidNumber(phoneNumber)) {
      return { phoneNumberValidation: false };
    }
    return null;
  } catch (e) { }
}
