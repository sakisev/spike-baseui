import React from 'react';
import { render, screen } from '@testing-library/react';
import ShareModal from './ShareModal';

test('renders learn react link', () => {
  render(<ShareModal />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
