import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type EpisodeType = {
  'id': number,
  'name': string,
  'air_date': string,
  'episode': string,
};

export type CharacterType = {
  'id': number,
  'name': string,
  'status': string,
  'species': string,
  'image': string,
};

export type RootReducerType = {
  episodes: EpisodeType[],
  characters: CharacterType[],
};

export type AnyDispatch = ThunkDispatch<RootReducerType, null, AnyAction>;
