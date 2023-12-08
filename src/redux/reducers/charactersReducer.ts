import { AnyAction } from 'redux';
import { ADD_CHARACTERS, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions';
import { CharacterReducerType } from '../../utils/types';

// Estado inicial
const INITIAL_STATE: CharacterReducerType = {
  listCharacters: [],
  favorites: [],
};

// Reducer
const characters = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    // caso a action seja de adicionar personagens
    case ADD_CHARACTERS:
      return {
        ...state,
        listCharacters: [...action.payload],
      };
    // caso a action seja de adicionar favoritos
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    // caso a action seja de remover favoritos
    // o filter vai retornar todos os personagens que não tem o id do personagem que foi passado na action
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((character) => (
          character.id !== action.payload.id
        )),
      };
    default:
      return state;
  }
};

export default characters;
