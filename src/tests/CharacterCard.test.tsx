import { screen } from '@testing-library/react';

import renderWithRouter from './helpers/renderWithRouter';
import CharacterCard from '../components/CharacterCard';

it('Testando o Card de Personagem', async () => {
  const characterMock = {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
  };

  renderWithRouter(<CharacterCard character={ characterMock } />);

  const name = screen.getByRole('heading', {
    name: /rick sanchez/i,
  });
  const status = screen.getByText(/alive/i);
  const species = screen.getByText(/human/i);
  const image = screen.getByRole('img', {
    name: /rick sanchez/i,
  });

  expect(name).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(species).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', characterMock.image);
});
