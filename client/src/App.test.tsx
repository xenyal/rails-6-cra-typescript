import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Fetch Test Datas button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Fetch Test Datas/i);
  expect(linkElement).toBeInTheDocument();
});
