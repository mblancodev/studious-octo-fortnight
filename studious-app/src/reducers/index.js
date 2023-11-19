import { combineReducers } from "redux";
import Pokemonreducer from "./pokemonreducer";
import Mapreducer from "./Mapreducer";
import Paginationreducer from "./Paginationreducer";

const reducer = combineReducers({
  pokemon: Pokemonreducer,
  map: Mapreducer,
  pag: Paginationreducer,
});

export default reducer;
