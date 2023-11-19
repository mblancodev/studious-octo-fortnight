// export const fetchPokemon = () => {
//   return async (dispatch) => {
//     try {
//       const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
//       const data = await res.json();

//       const promises = data.results.map(async (pokemon) => {

//         const res = await fetch(pokemon.url);
//         const data = await res.json();
//         return data;
//       });
//       console.log(data);
//       const results = await Promise.all(promises);
      

//       dispatch({ type: 'FETCH_DATA', payload: { data: data, results: results } });

//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };
// };
export const fetchPokemonpag = (pageNumber, pageSize) => {
  return async (dispatch) => {
    try {
      const offset = (pageNumber - 1) * pageSize;
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`);
      const data = await res.json();

      const promises = data.results.map(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      });

      const results = await Promise.all(promises);

      dispatch({ type: 'FETCH_DATA', payload: { data: data, results: results } });
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
};


export const initializeMap = (mapInstance) => {
  return {
    type: 'INITIALIZE_MAP',
    payload: { map: mapInstance },
  };
};

export const setUserLocation = (coordinates) => {
  return {
    type: 'SET_USER_LOCATION',
    payload: { coordinates },
  };
};

export const setTotalResults = (totalResults) => ({
  type: 'SET_TOTAL_RESULTS',
  payload: totalResults,
});

export const setPages = (pages) => ({
  type: 'SET_PAGES',
  payload: pages,
});

export const setCurrentPage = (currentPage) => ({
  type: 'SET_CURRENT_PAGE',
  payload: currentPage,
});



  