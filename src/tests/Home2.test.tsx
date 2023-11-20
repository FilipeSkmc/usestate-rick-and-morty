import { vi } from 'vitest';
import { screen } from '@testing-library/react';
// O * significa que estou importando tudo que foi exportado de fetchAPI
import * as fetchs from '../services/fetchAPI';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { mockEpisode } from './mocks';

// vi.mock('../services/fetchAPI.ts', () => ({
//   getEpisodes: async () => mockEpisode,
// }));

it('Testando a página Home ', async () => {
  // mockando a função getEpisodes, para que ela retorne uma lista de episódios
  // não estou mockando a global fetch, pois ela é usada em outros testes
  vi.spyOn(fetchs, 'getEpisodes').mockResolvedValue(mockEpisode);
  renderWithRouter(<App />);

  const heading = await screen.findByRole('heading', {
    name: /lista de episódios/i,
  });
  expect(heading).toBeInTheDocument();

  const headings4 = screen.getAllByRole('heading', {
    level: 4,
  });
  expect(headings4).toHaveLength(4);

  mockEpisode.forEach((element) => {
    const episode = screen.getByText(element.name);
    expect(episode).toBeInTheDocument();

    const airDate = screen.getByText(element.air_date);
    expect(airDate).toBeInTheDocument();

    const episodeNumber = screen.getByText(element.episode);
    expect(episodeNumber).toBeInTheDocument();
  });
});
