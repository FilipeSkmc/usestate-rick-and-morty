import { vi } from 'vitest';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';
// Mocks diferentes para cada página
import { mockDataPage1, mockDataPage2 } from './mocks';

it('Testando a página Characters se exibe os Cards', async () => {
  // Mockando a função fetch, para que ela retorne os dados da página 1
  vi.spyOn(global, 'fetch')
    // O mockResolvedValue serve para retornar um valor mockado
    .mockResolvedValue({
      // como o fetch retorna um objeto response, eu preciso mockar o método json
      json: async () => mockDataPage1,
    } as Response);

  // Renderizando a aplicação na rota /personagens
  renderWithRouter(<App />, { route: '/personagens' });

  // Espero que o heading com o texto "Personagens" esteja na tela
  const heading = await screen.findByRole('heading', {
    name: /personagens/i,
  });
  expect(heading).toBeInTheDocument();

  // Espero que o texto "Página 1" esteja na tela
  const pageRef = screen.getByText('Página 1');
  expect(pageRef).toBeInTheDocument();

  // Espero que o fetch tenha sido chamado apenas uma vez
  expect(global.fetch).toHaveBeenCalledTimes(1);

  // Espero que o texto "Rick Sanchez" esteja na tela
  const RickText = screen.getByText('Rick Sanchez');
  expect(RickText).toBeInTheDocument();

  // Nesse teste podemos realizar vários outros casos, como verificar quandos cards de personagens aparecem na tela, verificar se o botão de próxima página está na tela, etc.
  // E outras verificações que você achar necessárias
});

it('Testando a página Characters se exibe outros cards ao clicar', async () => {
  // Esses testes são bem parecidos com o anterior, a diferença é que aqui eu vou mockar o fetch duas vezes
  vi.spyOn(global, 'fetch')
    // Na segunda vez que o fetch for chamado em diante, ele vai retornar a página 2
    .mockResolvedValue({
      json: async () => mockDataPage2,
    } as Response)
    // .mockResolvedValueOnce serve para retornar um valor mockado apenas na primeira vez que a função for chamada
    // Na primeira vez que o fetch for chamado, ele vai retornar a página 1
    .mockResolvedValueOnce({
      json: async () => mockDataPage1,
    } as Response);

  renderWithRouter(<App />, { route: '/personagens' });

  // Espero que o heading com o texto "Personagens" esteja na tela
  const heading = await screen.findByRole('heading', {
    name: /personagens/i,
  });
  expect(heading).toBeInTheDocument();

  // Espero que o texto "Página 1" esteja na tela
  const pageRef = screen.getByText('Página 1');
  expect(pageRef).toBeInTheDocument();
  // Espero que o texto "Rick Sanchez" esteja na tela
  // O texto "Rick Sanchez" só vai estar na tela se o fetch retornar o mockDataPage1
  const RickText = screen.getByText('Rick Sanchez');
  expect(RickText).toBeInTheDocument();

  // Espero que o botão de próxima página esteja na tela
  const nextBtn = screen.getByRole('button', {
    name: /próximo/i,
  });
  expect(nextBtn).toBeInTheDocument();

  // Clicando no botão de próxima página
  await userEvent.click(nextBtn);

  // Após clicar no botão de próxima página, espero que o texto "Página 2" esteja na tela,
  // Página tenha sido atualizada com os dados da mockDataPage2,
  // pois a função fetch foi mockada para retornar a página 2
  const pageRef2 = screen.getByText('Página 2');
  expect(pageRef2).toBeInTheDocument();

  const MortyText = screen.getByText('Aqua Morty');
  expect(MortyText).toBeInTheDocument();

  // Espero que o fetch tenha sido chamado duas vezes uma na renderização da página e outra ao clicar no botão de próxima página
  expect(global.fetch).toHaveBeenCalledTimes(2);
});
