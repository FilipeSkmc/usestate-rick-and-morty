import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
import { mockDataPage1, mockDataPage2 } from './mocks';

it('Testando a página Characters se exibe os Cards', async () => {
  vi.spyOn(global, 'fetch')
    .mockResolvedValue({
      json: async () => mockDataPage1,
    } as Response);

  renderWithRouter(<App />, { route: '/personagens' });

  const heading = await screen.findByRole('heading', {
    name: /personagens/i,
  });
  expect(heading).toBeInTheDocument();

  const pageRef = screen.getByText('Página 1');
  expect(pageRef).toBeInTheDocument();

  expect(global.fetch).toHaveBeenCalledTimes(1);

  const RickText = screen.getByText('Rick Sanchez');
  expect(RickText).toBeInTheDocument();
});

it('Testando a página Characters se exibe outros cards ao clicar', async () => {
  vi.spyOn(global, 'fetch')
    // Na segunda vez que o fetch for chamado, ele vai retornar a página 2
    .mockResolvedValue({
      json: async () => mockDataPage2,
    } as Response)
    // Na primeira vez que o fetch for chamado, ele vai retornar a página 1
    .mockResolvedValueOnce({
      json: async () => mockDataPage1,
    } as Response);

  renderWithRouter(<App />, { route: '/personagens' });

  const heading = await screen.findByRole('heading', {
    name: /personagens/i,
  });
  expect(heading).toBeInTheDocument();

  const pageRef = screen.getByText('Página 1');
  expect(pageRef).toBeInTheDocument();

  const RickText = screen.getByText('Rick Sanchez');
  expect(RickText).toBeInTheDocument();

  const nextBtn = screen.getByRole('button', {
    name: /próximo/i,
  });
  expect(nextBtn).toBeInTheDocument();

  await userEvent.click(nextBtn);

  const pageRef2 = screen.getByText('Página 2');
  expect(pageRef2).toBeInTheDocument();

  const MortyText = screen.getByText('Aqua Morty');
  expect(MortyText).toBeInTheDocument();

  expect(global.fetch).toHaveBeenCalledTimes(2);
});
