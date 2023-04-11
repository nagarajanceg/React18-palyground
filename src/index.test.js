import { fireEvent, getByLabelText, render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  screen.getByText('Not Delivered');
});
