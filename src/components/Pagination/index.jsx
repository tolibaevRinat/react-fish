import React from 'react';
import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

const Pagination = ({ totalPages, onChange }) => {
  return (
    <ReactPaginate
      className={`${styles.list} flex f-cen gap-20 f-wrap`}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChange(event.selected + 1)}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
export default Pagination;
