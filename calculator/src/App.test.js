import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe("custom tests", () => {
  test("sanity check", () => {
    expect(1).toEqual(1)
    expect(1).not.toEqual(2)
  })
})