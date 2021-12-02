export class ValidationMessage {
  static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      required: `Field is required`,
      minlength: `Minimum length ${validatorValue.requiredLength}`,
      maxlength: `Maximum length ${validatorValue.requiredLength}`,
      email: `Email format is not valid`,
      urlValidation: `Url format is not valid`,
      alphaNumericValidation: `Only alphabeth and number is allowed`,
      alphabeticValidation: `Only alphabeth is allowed`,
      numericValidation: `Only number is allowed`,
      phoneNumberValidation: `Phone number format not correct`,
    };

    return config[validatorName];
  }
}
