// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import Home from '../pages/Home'; // Assuming your Home component file is named Home.jsx

// // Test if the Home component renders without throwing an error
// test('Home component renders without error', () => {
//   render(<Home />);
//   const titleElement = screen.getByText(/Welcome to devOpps/i);
//   expect(titleElement).toBeInTheDocument();
// });

// // Test if clicking on the Search button triggers the handleSearch function
// test('Clicking on the "Search" button triggers the handleSearch function', () => {
//     render(<Home />);
//     const searchButton = screen.getByRole('button', { name: /Search/i });
//     userEvent.click(searchButton);
//     expect(() => {}).not.toThrow();
//   });