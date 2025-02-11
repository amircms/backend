import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsKebabCase(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isKebabCase',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          // Regular expression to match kebab-case
          const kebabCaseRegex = /^[a-z]+(-[a-z]+)*$/;
          return typeof value === 'string' && kebabCaseRegex.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return `${args.property} must be in kebab-case format`;
        },
      },
    });
  };
}
