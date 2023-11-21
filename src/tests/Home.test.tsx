import { vi } from 'vitest';
import { screen } from '@testing-library/react';
// O * significa que estou importando tudo que existe no arquivo fetchAPI como um objeto chamado fetchs
import * as fetchs from '../services/fetchAPI';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
// O mockEpisode é um array de objetos, que simula o retorno da API
import { mockEpisode } from './mocks';

it('Testando a página Home ', async () => {
  // O spy serve para monitorar a função getEpisodes
  // mockando a função getEpisodes, para que ela retorne uma lista de episódios
  // não estou mockando a global fetch, pois ela é usada em outros testes
  vi.spyOn(fetchs, 'getEpisodes').mockResolvedValue(mockEpisode);
  renderWithRouter(<App />);

  // Espero que o heading com o texto "Lista de episódios" esteja na tela
  const heading = await screen.findByRole('heading', {
    name: /lista de episódios/i,
  });
  expect(heading).toBeInTheDocument();

  // Espero que existam 4 headings com level 4 na tela, por conta do mockEpisode
  const headings4 = screen.getAllByRole('heading', {
    level: 4,
  });
  expect(headings4).toHaveLength(4);

  // Para cada elemento do mockEpisode, espero que o nome,
  // a data de lançamento e o número do episódio estejam na tela
  mockEpisode.forEach((element) => {
    const episode = screen.getByText(element.name);
    expect(episode).toBeInTheDocument();

    const airDate = screen.getByText(element.air_date);
    expect(airDate).toBeInTheDocument();

    const episodeNumber = screen.getByText(element.episode);
    expect(episodeNumber).toBeInTheDocument();
  });
});
