import { AnyAction } from 'redux';
import { EpisodeType } from '../../utils/types';
import { ADD_EPISODES } from '../actions';

const INITIAL_STATE: EpisodeType[] = [];

const episodes = (state = INITIAL_STATE, action: AnyAction) => {
  switch (action.type) {
    case ADD_EPISODES:
      return [...action.payload];

    default:
      return state;
  }
};

export default episodes;
