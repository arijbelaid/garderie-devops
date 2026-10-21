import { render, screen } from '@testing-library/react';
import Home from '../app/page';

// On simule la réponse du backend pour que le test ne dépende pas d'un serveur allumé
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ nom: "Ma Garderie", description: "Test" }),
  })
);

describe('Page d\'accueil', () => {
  it('affiche le titre "Ma Garderie"', async () => {
    render(<Home />);
    // On cherche si le texte "Ma Garderie" est présent
    const heading = await screen.findAllByText(/Ma Garderie/i);
    expect(heading.length).toBeGreaterThan(0);
  });
});
