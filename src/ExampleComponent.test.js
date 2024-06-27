import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import ExampleComponent from './ExampleComponent';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

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

describe('ExampleComponent', () => {
  it('fetches data and renders it correctly in a list', async () => {
    render(<ExampleComponent />);

    // Wait for the Axios request and the mocked API response to be processed
    const dataElement1 = await screen.findByText('Mocked Data 1');
    const dataElement2 = await screen.findByText('Mocked Data 2');

    expect(dataElement1).toBeInTheDocument();
    expect(dataElement2).toBeInTheDocument();
  });
});
