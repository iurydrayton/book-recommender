class UserFeature {
    constructor(
        id,
        name,
        sex,
        age,
        click_fantasy,
        click_sci_fi,
        click_romance,
        click_realism,
        click_dystopia,
        click_local_author,
        click_foreign_author,
        click_book_price
    ) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.click_fantasy = click_fantasy;
        this.click_sci_fi = click_sci_fi;
        this.click_romance = click_romance;
        this.click_realism = click_realism;
        this.click_dystopia = click_dystopia;
        this.click_local_author = click_local_author;
        this.click_foreign_author = click_foreign_author;
        this.click_book_price = click_book_price;
    }

    addUserFeature(user, sumClicks) {
        this.sex = user.sex;
        this.age = user.age;
        this.click_fantasy = user.click_fantasy / sumClicks; // Assuming the maximum clicks for a genre is 100
        this.click_sci_fi = user.click_sci_fi / sumClicks;
        this.click_romance = user.click_romance / sumClicks;
        this.click_realism = user.click_realism / sumClicks;
        this.click_dystopia = user.click_dystopia / sumClicks;
        this.click_local_author = user.click_local_author === 'Yes' ? 1 : 0;
        this.click_foreign_author = user.click_foreign_author === 'No' ? 1 : 0;
        this.click_book_price = Math.min(1, user.click_book_price / 100); // Assuming the maximum price of a book is 100
    }

    getUserFeature(user) {
        const sumClicks = this.click_fantasy + this.click_sci_fi + this.click_romance + this.click_realism + this.click_dystopia;
        const sumClicksAuthor = this.click_local_author + this.click_foreign_author;
        const maxPrice = 100; // Assuming the maximum price of a book is 100

        return [
            this.sex === 'M' ? 1 : 0,
            this.age / 100 || 0,
            this.click_fantasy / sumClicks || 0,
            this.click_sci_fi / sumClicks || 0,
            this.click_romance / sumClicks || 0,
            this.click_realism / sumClicks || 0,
            this.click_dystopia / sumClicks || 0,
            this.click_local_author / sumClicksAuthor || 0,
            this.click_foreign_author / sumClicksAuthor || 0,
            Math.min(1, this.click_book_price / maxPrice || 0)
        ]
    }
}

module.exports = UserFeature;