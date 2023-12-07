// importar os mocks de cada endpoint
import { mockEpisodes } from './mockEpisodes';
import { mockPage1 } from './mockPage1';
import { mockPage2 } from './mockPage2';
import { mockPage3 } from './mockPage3';

// objeto com as possíveis respostas da API
// cada endpoint será uma chave do objeto POSSIBLE_RESPONSES
// e o valor será o mock correspondente
const POSSIBLE_RESPONSES: any = {
  'https://rickandmortyapi.com/api/episode': mockEpisodes,
  'https://rickandmortyapi.com/api/character/?page=1': mockPage1,
  'https://rickandmortyapi.com/api/character/?page=2': mockPage2,
  'https://rickandmortyapi.com/api/character/?page=3': mockPage3,
};

// função que simula o fetch que recebe uma url e retorna uma Promise
// toda vez que o fetch for chamado, ele vai retornar uma Promise resolvida
// e a cada chamada, vai verificar se a url está no objeto POSSIBLE_RESPONSES
const fetchMock = (url: string) => Promise.resolve({
  status: 200,
  ok: true,
  // se a url estiver no objeto POSSIBLE_RESPONSES, retorna o valor correspondente, senão retorna mockEpisodes
  json: async () => (POSSIBLE_RESPONSES[url] ? POSSIBLE_RESPONSES[url] : mockEpisodes),
});

export default fetchMock;
