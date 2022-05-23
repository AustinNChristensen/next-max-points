/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

require('jest-fetch-mock').enableMocks();

jest.mock('next/config', () => () => ({
    serverRuntimeConfig: {
        MONGODB_URL: 'test'
    }
}));

jest.mock('next/router', () => require('next-router-mock'));