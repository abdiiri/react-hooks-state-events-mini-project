
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"], 
  moduleFileExtensions: ["js", "jsx"],
  testMatch: ["**/__tests__/**/*.test.js?(x)"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
