const initialState = {
    data:[],
    isLoading:false,
    error:null
  };
  
  // Define the reducer
  const Pokemonreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
        return { ...state, data: action.payload };
      default:
        return state;
    }
  };
  
export default Pokemonreducer;