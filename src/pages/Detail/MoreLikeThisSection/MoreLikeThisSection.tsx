import { useState } from "react";
import { Button, PageButton, Pagination, Table, Td, Th } from "..";

const ITEMS_PER_PAGE = 7;
const MAX_PAGE_RANGE = 5;

export const MoreLikeThisSection = ({ detail }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = detail.creditsData.crew.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedCrew = detail.creditsData.crew.slice(startIndex, endIndex);

  const getPageRange = () => {
    let startPage = Math.max(1, currentPage - Math.floor(MAX_PAGE_RANGE / 2));
    let endPage = startPage + MAX_PAGE_RANGE - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(1, endPage - MAX_PAGE_RANGE + 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <h2>Crew:</h2>
      <Table>
        <thead>
          <tr>
            <Th>Name</Th>
            <Th>Job</Th>
            <Th>Popularity</Th>
          </tr>
        </thead>
        <tbody>
          {displayedCrew.map((crew: any, i: number) => (
            <tr key={`${crew.name} ${i}`}>
              <Td>{crew.name}</Td>
              <Td>{crew.job}</Td>
              <Td>{crew.popularity}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      {totalPages > 1 && (
        <Pagination>
          <Button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            {'<'}
          </Button>
          {getPageRange().map((page) => (
            <PageButton
              key={page}
              active={currentPage === page ? "true" : "false"}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </PageButton>
          ))}
          <Button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            {'>'}
          </Button>
        </Pagination>
      )}
    </>
  );
};
