import { AnyAction } from 'redux';
import { ADD_CHARACTERS, ADD_FAVORITE, REMOVE_FAVORITE } from '../actions';
import { CharacterReducerType } from '../../utils/types';

const INITIAL_STATE: CharacterReducerType = {
  listCharacters: [],
  favorites: [],
};

const characters = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return {
        ...state,
        listCharacters: [...action.payload],
      };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
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
