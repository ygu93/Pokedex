import { RECEIVE_POKEMON } from '../actions/pokemon_action';
import merge from 'lodash/merge';


const PokemonDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_POKEMON:
      let newPokemon = action.pokemon;
      newState = merge({}, state, newPokemon);
      return newState;
    default:
      return state;
  }
};


export default PokemonDetailReducer;
