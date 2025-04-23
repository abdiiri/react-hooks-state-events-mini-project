module.exports = {
  testEnvironment: "jsdom", // Use jsdom for DOM-related tests
  testEnvironmentOptions: {}, // Add this to avoid undefined errors
  setupFilesAfterEnv: [
    "@testing-library/jest-dom", // Automatically extend expect with jest-dom matchers
  ],
  moduleFileExtensions: ["js", "jsx"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
