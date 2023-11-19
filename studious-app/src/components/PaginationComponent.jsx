import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/actions';
import Button from './Button';

const Pagination = () => {

    const dispatch = useDispatch();
  const totalResults = useSelector(state => state.pag.totalResults);
  const pages = useSelector(state=>state.pag.pages);
  const currentPage = useSelector(state => state.pag.currentPage);
  const pageSize = useSelector(state=>state.pag.pageSize);

  
const goToPage = (pageNumber) => {
    
    dispatch(setCurrentPage(pageNumber));
    
  };
  const nextPage = () => {
    if (currentPage < pages) {
      goToPage(currentPage + 1);
    }
  };

  const resetToPageOne = () => {
    goToPage(1); // reseteo a la pagina 1
  };

  const goTolast = () => {
    goToPage(pages); // go to lastpage
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  const remainingPokemons = totalResults - pageSize * (currentPage - 1);
const totalShownPokemons = remainingPokemons <= pageSize ? totalResults: pageSize * (currentPage - 1) + pageSize;


  return (
    <div>
      <div>Total Results:{totalShownPokemons} of {totalResults}</div>
      <div>Pages: {currentPage} of {pages}</div>
      <div className='botones' >
        <Button variant="primary" evento={prevPage}>Prev</Button>
        <Button variant="primary" evento={resetToPageOne}>Reset to Page 1</Button>
        <Button variant="secondary" evento={goTolast}>go to Page Lastone</Button>
      <Button variant="secondary" evento={nextPage}>Next</Button>
        
      </div>

    </div>
  );
};

export default Pagination;
