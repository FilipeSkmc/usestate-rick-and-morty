import { AnyAction } from 'redux';
import { CharacterType } from '../../utils/types';
import { ADD_CHARACTERS, START_REQUEST } from '../actions';

const INITIAL_STATE: CharacterType[] = [];

const characters = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_CHARACTERS:
      return [...action.payload];
    default:
      return state;
  }
};

export default characters;
