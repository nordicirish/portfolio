import test from "node:test";
import assert from "node:assert/strict";
// @ts-ignore
import { validateString, validateEmail } from "../api/sendEmail.js";

test("validateString accepts valid strings", () => {
  assert.equal(validateString("hello", 10), true);
  assert.equal(validateString("   spaces   ", 15), true);
});

test("validateString rejects empty or whitespace-only strings", () => {
  assert.equal(validateString("", 10), false);
  assert.equal(validateString("   ", 10), false);
  assert.equal(validateString(null, 10), false);
  assert.equal(validateString(undefined, 10), false);
});

test("validateString rejects strings exceeding maxLength", () => {
  assert.equal(validateString("abcdef", 5), false);
  assert.equal(validateString("abcde", 5), true);
});

test("validateEmail accepts standard email addresses", () => {
  assert.equal(validateEmail("user@example.com"), true);
  assert.equal(validateEmail("first.last@domain.fi"), true);
});

test("validateEmail rejects invalid email patterns", () => {
  assert.equal(validateEmail("not-an-email"), false);
  assert.equal(validateEmail("missing@domain"), false);
  assert.equal(validateEmail("@nodomain.com"), false);
  assert.equal(validateEmail("spaces in@email.com"), false);
});
