export const DEFAULT_PHONE_NUMBERS = ["07 87 90 78 32", "06 59 77 27 37"];

export function getPhoneNumbers(settings?: any): string[] {
  const primaryPhone = settings?.data?.primary_phone;
  const secondaryPhone = settings?.data?.secondary_phone;

  const numbers = [primaryPhone, secondaryPhone].filter(
    (value): value is string => Boolean(value),
  );

  return numbers.length > 0 ? numbers : DEFAULT_PHONE_NUMBERS;
}

export function getPhoneContacts(settings?: any) {
  return getPhoneNumbers(settings).map((number) => ({
    number,
    href: `tel:${number.replace(/\s/g, "")}`,
  }));
}
