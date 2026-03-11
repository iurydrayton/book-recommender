// catalogoLivros.js
const catalogoLivros = [
  // SCI-FI (20 livros)
  { id: 0, nome: "Duna", genre: "Sci-Fi", sex_preference: "M", local_author: false, price: 59.90 },
  { id: 1, nome: "1984", genre: "Sci-Fi", sex_preference: "M", local_author: false, price: 39.90 },
  { id: 2, nome: "Neuromancer", genre: "Sci-Fi", sex_preference: "M", local_author: false, price: 49.90 },
  { id: 3, nome: "Fundação", genre: "Sci-Fi", sex_preference: "M", local_author: false, price: 55.90 },
  { id: 4, nome: "Blade Runner", genre: "Sci-Fi", sex_preference: "M", local_author: false, price: 45.90 },
  
  // FANTASY (20 livros)
  { id: 20, nome: "O Nome do Vento", genre: "Fantasy", sex_preference: "M", local_author: false, price: 49.90 },
  { id: 21, nome: "O Senhor dos Anéis", genre: "Fantasy", sex_preference: "M", local_author: false, price: 69.90 },
  { id: 22, nome: "O Hobbit", genre: "Fantasy", sex_preference: "U", local_author: false, price: 39.90 },
  { id: 23, nome: "Crônicas de Gelo e Fogo", genre: "Fantasy", sex_preference: "M", local_author: false, price: 79.90 },
  { id: 24, nome: "Mistborn", genre: "Fantasy", sex_preference: "M", local_author: false, price: 54.90 },
  
  // ROMANCE (20 livros)
  { id: 40, nome: "Orgulho e Preconceito", genre: "Romance", sex_preference: "F", local_author: false, price: 45.90 },
  { id: 41, nome: "O Diário de Bridget Jones", genre: "Romance", sex_preference: "F", local_author: false, price: 39.90 },
  { id: 42, nome: "Como Eu Era Antes de Você", genre: "Romance", sex_preference: "F", local_author: false, price: 49.90 },
  { id: 43, nome: "A Escolha", genre: "Romance", sex_preference: "F", local_author: false, price: 44.90 },
  { id: 44, nome: "P.S. Eu Te Amo", genre: "Romance", sex_preference: "F", local_author: false, price: 41.90 },
  
  // REALISMO (15 livros)
  { id: 60, nome: "Dom Casmurro", genre: "Realism", sex_preference: "U", local_author: true, price: 35.90 },
  { id: 61, nome: "Grande Sertão Veredas", genre: "Realism", sex_preference: "M", local_author: true, price: 52.90 },
  { id: 62, nome: "Memórias Póstumas", genre: "Realism", sex_preference: "U", local_author: true, price: 38.90 },
  { id: 63, nome: "O Alquimista", genre: "Realism", sex_preference: "U", local_author: true, price: 42.90 },
  
  // DYSTOPIA (15 livros)
  { id: 75, nome: "Admirável Mundo Novo", genre: "Dystopia", sex_preference: "M", local_author: false, price: 47.90 },
  { id: 76, nome: "Fahrenheit 451", genre: "Dystopia", sex_preference: "M", local_author: false, price: 43.90 },
  { id: 77, nome: "Jogos Vorazes", genre: "Dystopia", sex_preference: "F", local_author: false, price: 39.90 },
  
  // LIVROS LOCAIS BRASILEIROS (10)
  { id: 90, nome: "Cidade de Deus", genre: "Realism", sex_preference: "M", local_author: true, price: 36.90 },
  { id: 91, nome: "Olhai os Lírios do Campo", genre: "Romance", sex_preference: "F", local_author: true, price: 33.90 },
  
  // BEST-SELLERS MISTOS (10)
  { id: 95, nome: "Harry Potter I", genre: "Fantasy", sex_preference: "U", local_author: false, price: 59.90 },
  { id: 96, nome: "Percy Jackson I", genre: "Fantasy", sex_preference: "U", local_author: false, price: 44.90 }
];

// Preenche até 100 com variações
for (let i = 10; i < 100; i++) {
  if (!catalogoLivros[i]) {
    const genres = ['Sci-Fi', 'Fantasy', 'Romance', 'Realism', 'Dystopia'];
    const sexPrefs = ['M', 'F', 'U'];
    catalogoLivros[i] = {
      id: i,
      nome: `Livro Exemplo ${i}`,
      genre: genres[i % 5],
      sex_preference: sexPrefs[Math.floor(i / 20) % 3],
      local_author: i % 3 === 0,
      price: (30 + (i % 70)).toFixed(2)
    };
  }
}

module.exports = catalogoLivros;
