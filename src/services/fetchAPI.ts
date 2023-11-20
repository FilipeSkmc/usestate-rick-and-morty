import { CharacterType, EpisodeType } from '../utils/types';

// Esta função retorna uma Promise que resolve em um array de episódios
export const getEpisodes = async (): Promise<EpisodeType[]> => {
  const response = await fetch('https://rickandmortyapi.com/api/episode');
  const data = await response.json();
  const { results } = data;
  // O map abaixo retorna um array de objetos com as propriedades
  // id, name, air_date, episode e characters
  return results.map((episode: EpisodeType) => ({
    id: episode.id,
    name: episode.name,
    air_date: episode.air_date,
    episode: episode.episode,
    characters: episode.characters,
  }));
};

// Esta função retorna uma Promise que resolve em um array de personagens,
// ela recebe um index como parâmetro,
// que é o número da página que será buscada
export const getCharacters = async (index: number): Promise<CharacterType[]> => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${index}`);
  const data = await response.json();
  const { results } = data;
  // O map abaixo retorna um array de objetos com as propriedades
  // id, image, name, status e species
  return results.map((character: CharacterType) => ({
    id: character.id,
    image: character.image,
    name: character.name,
    status: character.status,
    species: character.species,
  }));
};
