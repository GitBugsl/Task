import React from 'react';
import { Link } from 'react-router-dom';

const Pagination: React.FC<{ totalPages: number, currentPage: number, goToPage: (page: number) => void }> = ({ totalPages, currentPage, goToPage }) => {
  let startPage = currentPage - 2;
  let endPage = currentPage + 7;

  if (startPage < 1) {
    startPage = 1;
    endPage = Math.min(totalPages, 10); 
  } else if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, totalPages - 9); 
  }

  const pageNumbers = Array.from(Array(endPage - startPage + 1).keys()).map(num => num + startPage);

  return (
    <div className="flex container gap-x-1 md:gap-x-5 mt-5 items-center mx-auto justify-center">
      {pageNumbers.map(pageNumber => (
        <div className='w-8 h-8 md:w-10 md:h-10 bg-zinc-800 rounded-full items-center flex justify-center' key={pageNumber}>
          <Link to={`/episode/${pageNumber}`} onClick={() => goToPage(pageNumber)}>
            <button className={currentPage === pageNumber ? 'active  poppins-bold text-violet-400 w-full h-full' : 'w-full h-full text-white poppins-bold text-xs'}>{pageNumber}</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
