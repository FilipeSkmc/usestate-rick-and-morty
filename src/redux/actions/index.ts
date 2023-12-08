import { Dispatch } from 'redux';
import { CharacterType, EpisodeType } from '../../utils/types';
import { getCharacters, getEpisodes } from '../../services/fetchAPI';

// Action types
export const ADD_EPISODES = 'ADD_EPISODES';
export const ADD_CHARACTERS = 'ADD_CHARACTERS';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const START_REQUEST = 'START_REQUEST';
export const SUCCESS_REQUEST = 'SUCCESS_REQUEST';
export const ERROR_REQUEST = 'ERROR_REQUEST';

// Action creators
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

// actions para controlar a requisição
// usado dentro das actions de fetch
const startRequest = () => ({
  type: START_REQUEST,
});

const successRequest = () => ({
  type: SUCCESS_REQUEST,
});

const errorRequest = () => ({
  type: ERROR_REQUEST,
});

// actions para fazer as requisições assíncronas
export const fetchEpisodes = () => async (dispatch: Dispatch) => {
  try {
    // disparando a action de start request
    dispatch(startRequest());

    // fazendo a requisição
    const response = await getEpisodes();
    // disparando a action de add episodes
    dispatch(addEpisodes(response));

    // disparando a action de success request
    dispatch(successRequest());
  } catch (error) {
    // em caso de erro, dispara a action de error request
    dispatch(errorRequest());
  }
};

// action para fazer a requisição dos personagens, recebendo o id da página como parâmetro
// na montagem do componente, o id da página é passado como parâmetro para a action
export const fetchCharacters = (id: number) => async (dispatch: Dispatch) => {
  try {
    // disparando a action de start request
    dispatch(startRequest());

    // fazendo a requisição
    const response = await getCharacters(id);
    // disparando a action de add characters
    dispatch(addCharacters(response));

    // disparando a action de success request
    dispatch(successRequest());
  } catch (error) {
    // em caso de erro, dispara a action de error request
    dispatch(errorRequest());
  }
};
