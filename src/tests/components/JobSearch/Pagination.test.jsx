import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Pagination from '/src/components/JobSearch/Pagination';

describe('Pagination Component', () => {

  it('renders without error', () => {
    render(<Pagination />);
  });

});

describe('Page Number', () => {

  it('is visible with 10 results', () => {
    render(<Pagination page={0} jobsLength={10} />);
    const pageText = screen.getByText('Page 1');
    expect(pageText).toBeVisible();
  });

  it('is not visible with 9 results', () => {
     render(<Pagination page={0} jobsLength={9} />);
     const pageText = screen.queryByText('Page');
     expect(pageText).toBeNull(); 
  });

  it('is not visible with 0 results', () => {
    render(<Pagination page={0} jobsLength={0} />);
    const pageText = screen.queryByText('Page');
    expect(pageText).toBeNull(); 
 });

  it('is not visible while searching', () => {
    render(<Pagination page={0} jobsLength={10} isSearching={true} />);
    const pageText = screen.queryByText('Page');
    expect(pageText).toBeNull(); 
  });

  it('is visible on page 2', () => {
    render(<Pagination page={1} jobsLength={10} />);
    const pageText = screen.queryByText('Page 2');
    expect(pageText).toBeVisible();
  });

  it('is visible on page 2 with less than 10 results', () => {
    render(<Pagination page={1} jobsLength={9} />);
    const pageText = screen.queryByText('Page 2');
    expect(pageText).toBeVisible();
  });

});

describe('Previous Button', () => {

  it('is disabled on first page', () => {
        render(<Pagination page={0} jobsLength={10} />);
        const button = screen.getByRole('button', { name: 'Previous' });
        expect(button).toBeDisabled();
  });

  it('is enabled on last page', () => {
    render(<Pagination page={1} jobsLength={5} />);
    const button = screen.getByRole('button', { name: 'Previous' });
    expect(button).toBeEnabled();
  });

});

describe('Next Button', () => {

  it('is enabled on first page', () => {
        render(<Pagination page={0} jobsLength={10} />);
        const button = screen.getByRole('button', { name: 'Next' });
        expect(button).toBeEnabled();
  });

  it('is disabled on last page', () => {
    render(<Pagination page={1} jobsLength={5} />);
    const button = screen.getByRole('button', { name: 'Next' });
    expect(button).toBeDisabled();
  });

});

describe('Clicking Buttons', () => {

  it('click the next button on page 1', async () => {  
    
    // Set the start page number
    let currentPage = 0;

    // Mock the parent setPage function
    const setPage = (page) => {currentPage = page};  
    
    render(<Pagination page={currentPage} jobsLength={10} setPage={setPage}/>);
    const button = screen.getByRole('button', { name: 'Next' });
    await userEvent.click(button);
    expect(currentPage).toBe(1);
  });

  it('Click the previous button on page 2', async () => {  
    
    // Set the start page number
    let currentPage = 1;

    // Mock the parent setPage function
    const setPage = (page) => {currentPage = page};  
    
    render(<Pagination page={currentPage} jobsLength={5} setPage={setPage}/>);
    const button = screen.getByRole('button', { name: 'Previous' });
    await userEvent.click(button);
    expect(currentPage).toBe(0);
  });

});