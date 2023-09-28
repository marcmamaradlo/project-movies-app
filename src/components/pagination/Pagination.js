import { useState } from "react";

const Pagination = ({ movie, tv }) => {

  const [currentPage, setCurrentPage] = useState(1);
  let a = [];
  for (let i = 0; i < movie.total_pages; i++) {
    a.push(i);
  }
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = a.slice(firstIndex, lastIndex);
  const npage = Math.ceil(a.length / recordsPerPage);
  // const numbers = [...Array(npage + 1).keys()].slice(1);

  const prePage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const changeCPage = (id) => {
    setCurrentPage(id);
  }

  const nextPage = () => {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  const showPagenation = () => {

    return records.map((item, index) => (
      <a
        // href='#search-filter-menu'
        href='*'
        key={index}
        id={item}
        onClick={(n) => changeCPage(n)}
      >
        {item + 1}
      </a>

    ));
  }

  return (
    <>
      <a
        id='paginationPrevious'
        href='#search-filter-menu'
        onClick={prePage}
      >
        <i className="fa-solid fa-caret-left"></i>
      </a>
      {showPagenation()}
      <a
        id='pagenationNext'
        href='#search-filter-menu'
        onClick={nextPage}
      >
        <i className="fa-solid fa-caret-right"></i>
      </a>
    </>
  )
}

export default Pagination;