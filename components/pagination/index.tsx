import ReactPaginate from 'react-paginate';

interface Props {
  pageCount: number;
  handlePageClick: (e: any) => void;
}

const Pagination = (props: Props) => {
  const {pageCount, handlePageClick} = props;

  return (
    <div className="container" data-aos="fade-up" data-aos-delay={300}>
      <div className="row justify-content-md-center">
        <div className="col-lg-12">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="Prev"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination justify-content-center"
            activeClassName="active"
            renderOnZeroPageCount={null!}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
