import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage, fetchPokemonpag,setPages } from '../redux/actions';
import { useEffect } from 'react';
import Button from './Button';

const Pagination = () => {

    const dispatch = useDispatch();
  const totalResults = useSelector(state => state.pag.totalResults);
  const pages = useSelector(state=>state.pag.pages);
  const currentPage = useSelector(state => state.pag.currentPage);
  const pageSize = 20;
  const pokemonList= useSelector(state=>state.pag.pages)
    
    
  console.log(pages);
    console.log(currentPage);
        console.log(pokemonList, "soy pokemonlist");
 


    useEffect(() => {
        dispatch(fetchPokemonpag(currentPage, pageSize))
          .then(() => {
            const pages = Math.ceil(totalResults / pageSize);
            dispatch(setPages(pages)); // Actualizar el número de páginas en el estado global
          })
          .catch((error) => {
            console.error('Error fetching data:', error.message);
          });
      }, [dispatch, currentPage, pageSize, totalResults]);
  
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

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };
  const totalPokemonCount = pageSize * (currentPage +1 ) - pageSize;

  return (
    <div>
      <div>Total Results:{totalPokemonCount} of {totalResults}</div>
      <div>Pages: {currentPage} of {pages}</div>
      <Button variant="primary" evento={prevPage}>Prev</Button>
      <Button variant="secondary" evento={nextPage}>Next</Button>
      <Button variant="primary" evento={resetToPageOne}>Reset to Page 1</Button>
    </div>
  );
};

export default Pagination;
