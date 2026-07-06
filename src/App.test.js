import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Particle', () => () => null);
window.scrollTo = jest.fn();

test('renders the professional profile', () => {
  render(<App />);
  expect(screen.getAllByText(/Ramiro Godino Soares Gache/i).length).toBeGreaterThan(0);
});
