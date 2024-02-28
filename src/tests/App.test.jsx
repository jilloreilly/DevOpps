import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import App from '../App';

// Test if our `App` component renders without throwing an error.
it('App Component Renders Without Error', () => {
  render(<App />);
});
