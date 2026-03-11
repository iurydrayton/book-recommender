const tf = require('@tensorflow/tfjs');
const BookFeature = require('./book-feature');
const catalogoLivros = require('./catalog');

class LivroRecommender {
  constructor() {
    this.model = this.createModel();
  }

  createModel() {
    const input = tf.input({ shape: [15] });

    // HIDDEN LAYERS
    const hidden1 = tf.layers.dense({
      units: 64,
      activation: 'relu',
      kernelInitializer: 'varianceScaling'
    }).apply(input);

    const dropout1 = tf.layers.dropout({ rate: 0.3 }).apply(hidden1);

    const hidden2 = tf.layers.dense({
      units: 32,
      activation: 'relu'
    }).apply(dropout1);

    const hidden3 = tf.layers.dense({
      units: 16,
      activation: 'relu'
    }).apply(hidden2);

    // OUTPUT: probabilidade de interesse (0-1)
    const output = tf.layers.dense({
      units: 1,
      activation: 'sigmoid'
    }).apply(hidden3);

    const model = tf.model({
      inputs: input,
      outputs: output,
      name: 'livro_recommender'
    });

    model.summary();
    
    return model;
  }

  compile() {
    this.model.compile({
      optimizer: tf.train.adam(0.001),
      loss: 'binaryCrossentropy',
      metrics: ['accuracy']
    });
  }

  // Predição para um par user-livro específico
  async predict(userFeatures, bookFeatures) {
    console.log('Predicting with user features:', userFeatures);
    console.log('Predicting with book features:', bookFeatures);
    const input = tf.tensor2d([[...userFeatures, ...bookFeatures]]);
    const prediction = this.model.predict(input);
    const score = (await prediction.data())[0];
    
    input.dispose();
    prediction.dispose();
    
    return Math.max(0, Math.min(1, score)); // Clamp 0-1
  }

  // Top-K recomendações para um usuário (testa todos os livros)
  async recommend(userFeatures, catalogoLivros, topK = 5) {
    const recommendations = [];
    
    for (const livro of catalogoLivros) {
      const bookFeat = new BookFeature(
        livro.sex_preference,
        livro.genre === 'Sci-Fi' ? 1 : 0,
        livro.genre === 'Romance' ? 1 : 0,
        livro.genre === 'Realism' ? 1 : 0,
        livro.genre === 'Dystopia' ? 1 : 0,
        livro.genre === 'Fantasy' ? 1 : 0,
        livro.local_author ? 1 : 0,
        !livro.local_author ? 1 : 0,
        Math.min(1, livro.price / 100)
      );

      const score = await this.predict(userFeatures, bookFeat.getFeatureVector());
      
      recommendations.push({
        id: livro.id,
        nome: livro.nome,
        score: score,
        scorePercent: (score * 100).toFixed(1)
      });
    }

    // Ordena por score DESC
    return recommendations
      .sort((a, b) => b.score - a.score)
      .slice(0, topK);
  }
}

module.exports = LivroRecommender;
