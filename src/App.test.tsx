import { render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders initial App component', () => {
  render(<App />);
  const linkElement = screen.getByText(/react template project!/i);
  expect(linkElement).toBeInTheDocument();
});
