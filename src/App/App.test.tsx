import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header', () => {
  render(<App />);
  const header = screen.getByText(/PSNProfiles Rank Calculator/i);
  expect(header).toBeInTheDocument();
});
