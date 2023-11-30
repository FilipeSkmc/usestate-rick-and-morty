const citadel = 'Citadel of Ricks';
const location3 = 'https://rickandmortyapi.com/api/location/3';

export const mockPage3 = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=4',
    prev: 'https://rickandmortyapi.com/api/character/?page=2',
  },
  results: [
    {
      id: 41,
      name: 'Big Boobed Waitress',
      status: 'Alive',
      species: 'Mythological Creature',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Fantasy World',
        url: 'https://rickandmortyapi.com/api/location/48',
      },
      location: {
        name: 'Fantasy World',
        url: 'https://rickandmortyapi.com/api/location/48',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/41.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/5',
      ],
      url: 'https://rickandmortyapi.com/api/character/41',
      created: '2017-11-05T10:13:45.960Z',
    },
    {
      id: 42,
      name: 'Big Head Morty',
      status: 'unknown',
      species: 'Human',
      type: 'Human with giant head',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: citadel,
        url: location3,
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/42.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/22',
      ],
      url: 'https://rickandmortyapi.com/api/character/42',
      created: '2017-11-05T10:15:53.349Z',
    },
    {
      id: 43,
      name: 'Big Morty',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: citadel,
        url: location3,
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/43.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/28',
      ],
      url: 'https://rickandmortyapi.com/api/character/43',
      created: '2017-11-05T10:17:04.997Z',
    },
    {
      id: 44,
      name: 'Body Guard Morty',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/44.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/28',
      ],
      url: 'https://rickandmortyapi.com/api/character/44',
      created: '2017-11-05T10:18:11.062Z',
    },
  ],
};
