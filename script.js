document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "flip flop",
      img: "pictures/updated pictures/flip flop.jpg",
    },
    {
      name: "flip flop",
      img: "pictures/updated pictures/flip flop.jpg",
    },
    {
      name: "glasses",
      img: "pictures/updated pictures/glasses.jpg",
    },
    {
      name: "glasses",
      img: "pictures/updated pictures/glasses.jpg",
    },
    {
      name: "flowers",
      img: "pictures/updated pictures/flowers.jpg",
    },
    {
      name: "flowers",
      img: "pictures/updated pictures/flowers.jpg",
    },
    {
      name: "lemon",
      img: "pictures/updated pictures/lemon.jpg",
    },
    {
      name: "lemon",
      img: "pictures/updated pictures/lemon.jpg",
    },
    {
      name: "water-heater",
      img: "pictures/updated pictures/water-heater.jpg",
    },
    {
      name: "water-heater",
      img: "pictures/updated pictures/water-heater.jpg",
    },
    {
      name: "wifi",
      img: "pictures/updated pictures/wifi.jpg",
    },
    {
      name: "wifi",
      img: "pictures/updated pictures/wifi.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "pictures/updated pictures/blank.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute(
        "src",
        "pictures/updated pictures/blank.jpg"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "pictures/updated pictures/blank.jpg"
      );
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute(
        "src",
        "pictures/updated pictures/white.png"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "pictures/updated pictures/white.png"
      );
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
      alert("You found a match");
    } else {
      cards[optionOneId].setAttribute(
        "src",
        "pictures/updated pictures/blank.jpg"
      );
      cards[optionTwoId].setAttribute(
        "src",
        "pictures/updated pictures/blank.jpg"
      );
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});
