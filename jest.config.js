/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  roots: ["<rootDir>/src"], // Explicitly tell Jest where the source code (and potentially tests) are
  testMatch: ["<rootDir>/src/**/__tests__/**/*.test.js?(x)"],
};
