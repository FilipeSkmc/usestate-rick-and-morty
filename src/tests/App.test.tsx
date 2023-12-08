import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import App from '../App';
import { renderWithRouterAndRedux } from './helpers/renderWith';

import { mockEpisodes } from './mocks/mockEpisodes';
import { mockPage1 } from './mocks/mockPage1';

describe('Testando alguns cenários', () => {
  it('Testando se a lista de episodios aparece', async () => {
    // mockando a função fetch, para que ela retorne um objeto com o método json
    // em mockEpisodes temos o retorno da API
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockEpisodes,
    } as Response);

    renderWithRouterAndRedux(<App />);

    // aguardando o texto aparecer na tela
    const heading = await screen.findByText(/Lista de episódios/i);
    expect(heading).toBeInTheDocument();

    // verificando se o texto "Pilot" aparece na tela
    const pilotText = screen.getByText(/pilot/i);
    expect(pilotText).toBeInTheDocument();

    // para cada episódio, verificamos se o nome aparece na tela
    // mockEpisodes.results é um array de objetos com os episódios
    mockEpisodes.results.forEach((episode) => {
      const episodeText = screen.getByText(episode.name);
      expect(episodeText).toBeInTheDocument();
    });
  });

  it('Testando se a lista de personagens aparece', async () => {
    // mockando a função fetch, para que ela retorne um objeto com o método json
    // em mockPage1 temos o retorno da API, para a página de personagens
    vi.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockPage1,
    } as Response);

    // renderizando o componente, na rota /personagens
    // passando o initialEntries, para que o teste já comece nessa rota
    // vale lembrar que o initialEntries é um array de strings e nelas passamos a rota
    renderWithRouterAndRedux(<App />, { initialEntries: ['/personagens'] });

    const rickText = await screen.findByText(/Rick Sanchez/i);
    expect(rickText).toBeInTheDocument();

    // screen debug, para ver o que está sendo renderizado
    screen.debug();
  });

  it('Testando se a página de Favoritos está limpa', async () => {
    // renderizando o componente, na rota /favoritos
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/favoritos'],
    });

    // verificando se o texto "Nenhum personagem favorito" aparece na tela
    // como o estado inicial do redux a chave favorites é um array vazio
    const notFavorite = screen.getByText(/Nenhum personagem favorito/i);
    expect(notFavorite).toBeInTheDocument();

    screen.debug();
  });

  it.only('Testando se a página de Favoritos está com os personagens', async () => {
    // criando o estado inicial do redux, com 2 personagens favoritos
    const initialStore = {
      characters: {
        listCharacters: [],
        favorites: [
          {
            id: 2,
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
          },
          {
            id: 1,
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
          },
        ],
        episodes: [],
      },
    };

    // renderizando o componente, na rota /favoritos
    // passando o initialEntries, para que o teste já comece nessa rota
    // passando o initialState, para que o teste já comece com o estado inicial do redux criado acima
    renderWithRouterAndRedux(<App />, {
      initialEntries: ['/favoritos'],
      initialState: initialStore,
    });

    const rickText = await screen.findByText(/Rick Sanchez/i);
    expect(rickText).toBeInTheDocument();

    const morty = await screen.findByText(/Morty/i);
    expect(morty).toBeInTheDocument();

    // verificando se os corações aparecem na tela
    const heart = screen.getAllByText('♥︎');
    // verificando se temos 2 corações
    expect(heart).toHaveLength(2);
  });
});
