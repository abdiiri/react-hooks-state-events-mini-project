// jest.config.js
module.exports = {
  testEnvironment: "jest-environment-jsdom", // Specify the jsdom environment explicitly
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], // Ensure this path is correct
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
