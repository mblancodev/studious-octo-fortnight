const initialState = {
    totalResults: 0,
    pages: 0,
    currentPage: 1,
  };
  
  const Paginationreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TOTAL_RESULTS':
        return { ...state, totalResults: action.payload };
      case 'SET_PAGES':
        return { ...state, pages: action.payload };
      case 'SET_CURRENT_PAGE':
        return { ...state, currentPage: action.payload };
      // Otros casos para manejar acciones de paginación
      default:
        return state;
    }
  };
  
  export default Paginationreducer;
  