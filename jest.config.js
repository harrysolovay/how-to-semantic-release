module.exports = {
  "cache": false,
  "globals": {
    "ts-jest": {
      "diagnostics": true,
      "tsConfig": "tsconfig.json"
    }
  },
  "preset": "ts-jest",
  "testEnvironment": "node",
  "testMatch": [
    "**/*.spec.ts"
  ],
  "testPathIgnorePatterns": [
    "node_modules"
  ],
  "verbose": false,
}