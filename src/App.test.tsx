import { screen } from '@testing-library/react';
import React from 'react';

import App from './App';
import { renderWithProviders } from './utils/test-utils';

test('renders initial App component', () => {
  renderWithProviders(<App />);
  const linkElement = screen.getByText(/react template project/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders initial counter value', () => {
  renderWithProviders(<App />, {
    preloadedState: {
      counter: {
        value: 5,
      },
    },
  });
  const linkElement = screen.getByText(/count: 5/i);
  expect(linkElement).toBeInTheDocument();
});
