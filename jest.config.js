// jest.config.js
module.exports = {
  testEnvironment: "jsdom", // Use jsdom for DOM-related tests
  setupFilesAfterEnv: [
    "@testing-library/jest-dom", // This will automatically extend expect with jest-dom matchers
  ],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
