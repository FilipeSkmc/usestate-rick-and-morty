// cada endpoint será uma chave do objeto POSSIBLE_RESPONSES

import { mockEpisodes } from './mockEpisodes';
import { mockPage1 } from './mockPage1';
import { mockPage2 } from './mockPage2';
import { mockPage3 } from './mockPage3';

// objeto com as possíveis respostas da API
const POSSIBLE_RESPONSES: any = {
  'https://rickandmortyapi.com/api/episode': mockEpisodes,
  'https://rickandmortyapi.com/api/character/?page=1': mockPage1,
  'https://rickandmortyapi.com/api/character/?page=2': mockPage2,
  'https://rickandmortyapi.com/api/character/?page=3': mockPage3,
};

// função que simula o fetch
const mockFetch = (url: string) => Promise.resolve({
  status: 200,
  ok: true,
  // se a url estiver no objeto POSSIBLE_RESPONSES, retorna o valor correspondente, senão retorna mockEpisodes
  json: async () => (POSSIBLE_RESPONSES[url] ? POSSIBLE_RESPONSES[url] : mockEpisodes),
});

export default mockFetch;
