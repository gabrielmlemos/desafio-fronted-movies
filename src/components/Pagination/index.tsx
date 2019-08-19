import React from "react";

import "./style.scss";

interface IPaginationProps {
  totalPages: number;
  current: number;
  setCurrent: (value: number) => void;
}

function PaginationRaw(props: IPaginationProps) {
  const { totalPages, current, setCurrent } = props;

  const createPages = () => {
    const pages: number[] = [];

    for (let i = 1; i <= totalPages && i <= 5; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="pagination-container">
      <ul>
        {createPages().map(page => (
          <li
            key={page}
            className={page === current ? "current" : ""}
            onClick={() => setCurrent(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
}

const Pagination = React.memo(PaginationRaw);
export default Pagination;
