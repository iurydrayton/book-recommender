const genres = {
    'Sci-Fi': 0,
    'Fantasy': 1,
    'Romance': 2,
    'Realism': 3,
    'Dystopia': 4
};

class BookFeature {
    constructor(
        sex_preference,
        genre,
        local_author,
        foreign_author,
        book_price
    ) {
        this.sex_preference = sex_preference;
        this.genre = genre;
        this.local_author = local_author;
        this.foreign_author = foreign_author;
        this.book_price = book_price;
    }

    getFeatureVector() {
        return [
            this.sex_preference === 'M' ? 1 : 0,
            this.genre === genres[this.genre] || 0,
            this.local_author === true ? 1 : 0,
            this.foreign_author === true ? 1 : 0,
            Math.min(1, this.book_price / 100 || 0)
        ];
    }
}

module.exports = BookFeature;