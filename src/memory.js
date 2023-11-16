class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards) return undefined;
    let current = this.cards.length;
    let random;
    while (current > 0) {
      random = Math.floor(Math.random() * current);
      current--;
      [this.cards[current], this.cards[random]] = [
        this.cards[random],
        this.cards[current],
      ];
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    if (card1 === card2) {
      this.pairsClicked++;
      this.pairsGuessed++;
      return true;
    } else {
      this.pairsClicked++;
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    return this.pairsGuessed === 12;
  }
}
