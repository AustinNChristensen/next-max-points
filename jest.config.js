const nextJest = require('next/jest');

const jestConfig = nextJest({
    dir: './'
});

module.exports = jestConfig({
    setupFilesAfterEnv: ['./jest.setup.js'],
    testTimeout: 30000,
    coveragePathIgnorePatterns: [
        '/lib/mongoDB/client.ts'
    ]
});