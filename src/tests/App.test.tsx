import { screen } from '@testing-library/react';

import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';

it('Testando a header', async () => {
  renderWithRouter(<App />);
  const Home = screen.getByText(/Home/i);
  const Personagens = screen.getByText(/Personagens/i);

  expect(Home).toBeInTheDocument();
  expect(Personagens).toBeInTheDocument();
});
