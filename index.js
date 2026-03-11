const LivroRecommender = require('./recommender');
const catalogoLivros = require('./catalog');
const BookFeature = require('./book-feature');
const UserFeature = require('./user-feature');

// Seu usuário exemplo
const user = {
    sex: 'M',
    age: 30,
    click_fantasy: 80,
    click_sci_fi: 90,
    click_dystopia: 70,
    click_realism: 5,
    click_romance: 2,
    click_local_author: false,
    click_foreign_author: true,
    click_book_price: 10
};

const userFeature = new UserFeature(
    1, // id
    'João', // name
    user.sex,
    user.age,
    user.click_fantasy,
    user.click_sci_fi,
    user.click_romance,
    user.click_realism,
    user.click_dystopia,
    user.click_local_author,
    user.click_foreign_author,
    user.click_book_price
);

const sumClicks = user.click_fantasy + user.click_sci_fi + user.click_romance + user.click_realism + user.click_dystopia; 
const feature = userFeature.getUserFeature(user, sumClicks); // Seu método [11 features]

async function main() {
  const recommender = new LivroRecommender();
  recommender.compile();

  console.log('🔍 Features do usuário:', feature);
  
  // Top 5 recomendações
  const recommendations = await recommender.recommend(
    feature, 
    catalogoLivros, 
    5
  );

  console.log('\n📚 TOP 5 RECOMENDAÇÕES:');
  recommendations.forEach(rec => {
    console.log(`${rec.nome.padEnd(30)} | ${rec.scorePercent}%`);
  });
}

main();
