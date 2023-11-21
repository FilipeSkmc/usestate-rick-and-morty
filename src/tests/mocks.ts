// será usado dentro do objeto mockDataPage1 na chave results
export const mockPage1 = [
  {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
  },
  {
    id: 2,
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    name: 'Morty Smith',
    status: 'Alive',
    species: 'Human',
  },
  {
    id: 3,
    image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    name: 'Summer Smith',
    status: 'Alive',
    species: 'Human',
  },
  {
    id: 4,
    image: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg',
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
  },
];

// será usado dentro do objeto mockDataPage2 na chave results
export const mockPage2 = [
  {
    id: 21,
    image: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
    name: 'Aqua Morty',
    status: 'unknown',
    species: 'Humanoid',
  },
  {
    id: 22,
    image: 'https://rickandmortyapi.com/api/character/avatar/22.jpeg',
    name: 'Aqua Rick',
    status: 'unknown',
    species: 'Humanoid',
  },
  {
    id: 23,
    image: 'https://rickandmortyapi.com/api/character/avatar/23.jpeg',
    name: 'Arcade Alien',
    status: 'unknown',
    species: 'Alien',
  },
  {
    id: 24,
    image: 'https://rickandmortyapi.com/api/character/avatar/24.jpeg',
    name: 'Armagheadon',
    status: 'Alive',
    species: 'Alien',
  },
];

// mock usado para simular o retorno da função getEpisodes
export const mockEpisode = [
  {
    id: 1,
    name: 'Pilot',
    air_date: 'December 2, 2013',
    episode: 'S01E01',
  },
  {
    id: 2,
    name: 'Lawnmower Dog',
    air_date: 'December 9, 2013',
    episode: 'S01E02',
  },
  {
    id: 3,
    name: 'Anatomy Park',
    air_date: 'December 16, 2013',
    episode: 'S01E03',
  },
  {
    id: 4,
    name: 'M. Night Shaym-Aliens!',
    air_date: 'January 13, 2014',
    episode: 'S01E04',
  },
];

// mock usado para simular o retorno da função getCharacters com dados da página 1
export const mockDataPage1 = {
  info: {
    count: 826,
    pages: 1,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: mockPage1,
};

// mock usado para simular o retorno da função getCharacters com dados da página 2
export const mockDataPage2 = {
  info: {
    count: 826,
    pages: 2,
    next: 'https://rickandmortyapi.com/api/character/?page=3',
    prev: null,
  },
  results: mockPage2,
};
