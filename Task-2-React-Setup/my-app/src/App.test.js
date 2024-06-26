import { render, screen } from '@testing-library/react';
import App from './App';

test('Some complementary text', () => {
  render(<App />);
  const linkElement = screen.getByText(/it work hurray/i);
  expect(linkElement).toBeInTheDocument();
});
