const helpers = {
  formatCard: (cardNumber) => {
    let cardSection = cardNumber.split('-');
    let formatedCard = `xxxx-xxxx-xxxx-${cardSection[3]}`;

    return formatedCard;
  }
}

export default helpers;