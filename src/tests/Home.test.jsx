import { render, screen } from '@testing-library/react';
import * as userEvent from '@testing-library/user-event';
import Home from '../pages/Home';

test('renders Home component without crashing', () => {
    render(<Home />);
});

test('renders search form with dropdown and input fields', () => {
    render(<Home />);
    expect(screen.getByRole('button', { name: /select a job type/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/enter your location/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});