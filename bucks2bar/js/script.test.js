// script.test.js
test('username validation', () => {
  const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
  expect(regex.test('Valid1!!')).toBe(true);
  expect(regex.test('invalid')).toBe(false);
});
// script.test.js
test('username validation', () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    expect(regex.test('Valid1!!')).toBe(true);
    expect(regex.test('invalid')).toBe(false);
});

test('username validation with missing uppercase', () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    expect(regex.test('valid1!')).toBe(false);
});

test('username validation with missing special character', () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    expect(regex.test('Valid123')).toBe(false);
});

test('username validation with missing number', () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    expect(regex.test('Valid!')).toBe(false);
});

test('username validation with less than 8 characters', () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    expect(regex.test('Val1!')).toBe(false);
});