// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
// setupTests.js
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import axios from 'axios';

const server = setupServer(
  rest.get('https://api.example.com/data', (req, res, ctx) => {
    return res(
      ctx.json([
        { id: 1, name: 'Mocked Data 1' },
        { id: 2, name: 'Mocked Data 2' },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

// Set Axios base URL to the mock server URL
axios.defaults.baseURL = 'https://api.example.com';
