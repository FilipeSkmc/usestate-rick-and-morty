import { combineReducers } from 'redux';
import characters from './charactersReducer';
import episodes from './episodesReducer';

const rootReducer = combineReducers({
  characters,
  episodes,
});

export default rootReducer;
