export function normalizePhone(value) {
  return value.replace(/[\s-]/g, '');
}

export function isValidPhone(value) {
  return /^(\+374|0)\d{8}$/.test(normalizePhone(value));
}

export function isValidName(value) {
  return value.trim().length >= 2;
}