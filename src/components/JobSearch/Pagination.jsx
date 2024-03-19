/**
 * 
 * Pagination
 * Renders pagination buttons for job search results.
 * 
 * Props:
 * - page: The current results page, zero indexed (number)
 * - setPage: setPage(delta) function from parent. (function)
 * - isSearching: Whether the search is currently in progress. (boolean)
 * - jobsLength: The current job search results. (number)
 * - scrollToTop: Scroll to the top of the page on page change. (boolean)
 */

const Pagination = ({ page, setPage, isSearching, jobsLength = 0, scrollToTop = false }) => {

  const buttonClass = "rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:disabled:bg-indigo-600 disabled:opacity-25";

  // Handle page change (eg +1 or -1)
  const requestPageChange = (delta) => {
    if (delta === 0) return;
    if (page + delta < 0) return;
    if (scrollToTop) window.scrollTo({ top: 0 });
    setPage(page + delta);
  };

  // Don't render if no pagination required
  if ((page === 0 && jobsLength < 10) || isSearching){
    return null;
  }

  return (
    <div className={'flex justify-end items-center my-3'}>
      <button
        onClick={() => requestPageChange(-1)}
        disabled={page < 1}
        className={buttonClass}>
        Previous
      </button>
      <div className="inline-block mx-2">Page {page + 1}</div>
      <button
        onClick={() => requestPageChange(+1)}
        disabled={jobsLength < 10}
        className={buttonClass}>
        Next
      </button>
    </div>
  );
}

export default Pagination;