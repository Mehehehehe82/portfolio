import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "What is fair use?"', () => {
  render(<App />);
  const linkElement = screen.getByText(/What is Fair Use/i);
  expect(linkElement).toBeInTheDocument();
});
