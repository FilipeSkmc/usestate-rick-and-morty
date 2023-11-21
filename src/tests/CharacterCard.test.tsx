import { screen } from '@testing-library/react';

import renderWithRouter from './helpers/renderWithRouter';
import CharacterCard from '../components/CharacterCard';

it('Testando o Card de Personagem', async () => {
  // mock da props character, para verificar se o componente está recebendo as props corretamente
  const characterMock = {
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
  };

  // Como o componente CharacterCard recebe uma props character, eu preciso passar essa props para ele
  renderWithRouter(<CharacterCard character={ characterMock } />);

  // Espero que o nome, o status, a espécie e a imagem do personagem estejam na tela
  const name = screen.getByRole('heading', {
    name: /rick sanchez/i,
  });
  const status = screen.getByText(/alive/i);
  const species = screen.getByText(/human/i);
  const image = screen.getByRole('img', {
    name: /rick sanchez/i,
  });

  // Espero que o nome, o status, a espécie e a imagem do personagem estejam na tela
  expect(name).toBeInTheDocument();
  expect(status).toBeInTheDocument();
  expect(species).toBeInTheDocument();
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute('src', characterMock.image);
});
