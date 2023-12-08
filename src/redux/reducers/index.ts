import { combineReducers } from 'redux';
import characters from './charactersReducer';
import episodes from './episodesReducer';

// o combineReducers recebe um objeto com todos os reducers da aplicação
const rootReducer = combineReducers({
  characters,
  episodes,
});

export default rootReducer;
