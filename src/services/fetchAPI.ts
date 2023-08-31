import { CharacterType, EpisodeType } from '../utils/types';

// Esta função retorna uma Promise que resolve em um array de episódios
export const getEpisodes = async (): Promise<EpisodeType[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  return data.results;
};

// Esta função retorna uma Promise que resolve em um array de personagens, ela recebe um index como parâmetro, que é o número da página que será buscada
export const getCharacters = async (index: number): Promise<CharacterType[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${index}`);
  const data = await response.json();
  return data.results;
};
