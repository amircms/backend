import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import isHTML from 'html-validator'; // استفاده از کتابخانه validator.js

// ایجاد یک ValidatorConstraint برای اعتبارسنجی HTML
@ValidatorConstraint({ name: 'IsHTML', async: false })
export class IsHTMLConstraint implements ValidatorConstraintInterface {
  validate(value: any) {
    return typeof value === 'string' && isHTML(value); // بررسی آیا مقدار HTML معتبر است
  }

  defaultMessage(args: ValidationArguments) {
    return `${args.property} must be a valid HTML string`;
  }
}

// ایجاد دکوراتور @IsHTML
export function IsHTML(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'IsHTML',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: IsHTMLConstraint,
    });
  };
}
