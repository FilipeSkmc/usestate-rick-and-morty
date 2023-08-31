import { CharacterType, EpisodeType } from '../utils/types';

export const getEpisodes = async (): Promise<EpisodeType[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data.results;
};

export const getCharacters = async (index: number): Promise<CharacterType[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${index}`);
  const data = await response.json();
  return data.results;
};
