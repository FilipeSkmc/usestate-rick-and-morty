import { Dispatch } from 'redux';
import { CharacterType, EpisodeType } from '../../utils/types';
import { getCharacters, getEpisodes } from '../../services/fetchAPI';

export const ADD_EPISODES = 'ADD_EPISODES';
export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const START_REQUEST = 'START_REQUEST';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const ERROR_REQUEST = 'ERROR_REQUEST';

export const addEpisodes = (payload: EpisodeType[]) => ({
  type: ADD_EPISODES,
  payload,
});

export const addCharacters = (payload: CharacterType[]) => ({
  type: ADD_CHARACTERS,
  payload,
});

export const addFavorite = (payload: CharacterType) => ({
  type: ADD_FAVORITE,
  payload,
});

export const removeFavorite = (payload: CharacterType) => ({
  type: REMOVE_FAVORITE,
  payload,
});

const startRequest = () => ({
  type: START_REQUEST,
});

const successRequest = () => ({
  type: SUCCESS_REQUEST,
});

const errorRequest = () => ({
  type: ERROR_REQUEST,
});

export const fetchEpisodes = () => async (dispatch: Dispatch) => {
  try {
    dispatch(startRequest());

    const response = await getEpisodes();
    dispatch(addEpisodes(response));

    dispatch(successRequest());
  } catch (error) {
    dispatch(errorRequest());
  }
};

export const fetchCharacters = (id: number) => async (dispatch: Dispatch) => {
  try {
    dispatch(startRequest());

    const response = await getCharacters(id);
    dispatch(addCharacters(response));

    dispatch(successRequest());
  } catch (error) {
    dispatch(errorRequest());
  }
};
