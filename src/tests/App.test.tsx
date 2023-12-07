import { screen } from '@testing-library/react';
import { vi } from 'vitest';

import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import fetchMock from './mocks/fetchMock';

beforeEach(() => {
  // espiona a função global.fetch e substitui por uma função mockada
  // toda vez que a função global.fetch for chamada, ela vai chamar a função mockada
  vi.spyOn(global, 'fetch').mockImplementation(fetchMock as any);
});

describe('Testando a chamada de api', () => {
  it('Testando se chama o mock de Episodes', async () => {
    renderWithRouter(<App />);

    const headingElement = await screen.findByText(/Lista de episódios/i);
    expect(headingElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/episode');
  });

  it('Testando se chama o mock de Personagens', async () => {
    renderWithRouter(<App />, { route: '/personagens' });

    const headingElement = await screen.findByText(/personagens/i);
    expect(headingElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/?page=1');

    const rickElement = await screen.findByText(/Rick Sanchez/i);
    expect(rickElement).toBeInTheDocument();

    const buttonElement = await screen.findByText(/próximo/i);
    expect(buttonElement).toBeInTheDocument();

    await userEvent.click(buttonElement);

    const aquaMortyElement = await screen.findByText(/Aqua Morty/i);
    expect(aquaMortyElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/?page=2');

    const buttonBeforeLoading = await screen.findByText(/próximo/i);
    await userEvent.click(buttonBeforeLoading);

    const bigHeadElement = await screen.findByText(/Big Boobed Waitress/i);
    expect(bigHeadElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(3);
    expect(global.fetch).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character/?page=3');
  });
});
