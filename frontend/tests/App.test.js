import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the internship recommendation form', () => {
  render(<App />);
  const formElement = screen.getByRole('form');
  expect(formElement).toBeInTheDocument();
});

test('renders the recommendation list', () => {
  render(<App />);
  const recommendationListElement = screen.getByText(/recommendations/i);
  expect(recommendationListElement).toBeInTheDocument();
});

test('displays error message when no recommendations are found', () => {
  render(<App />);
  const errorMessage = screen.getByText(/no recommendations found/i);
  expect(errorMessage).toBeInTheDocument();
});