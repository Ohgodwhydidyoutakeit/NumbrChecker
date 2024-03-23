export class PolishPhoneNumberUtil {
  static isValidPhoneNumber(phoneNumber: string): boolean {
    // Regular expression for Polish phone numbers
    const phoneRegex = /^(?:(?:\+|0)48)?(?:\d{9}|\d{3}-\d{3}-\d{3})$/;

    return phoneRegex.test(phoneNumber);
  }
}
