document.addEventListener('DOMContentLoaded', () => {

  // card options
  const cardArray = [
    {
      name: 'butterfly',
      img: 'images/butterfly.jpeg'
    },
    {
      name: 'butterfly',
      img: 'images/butterfly.jpeg'
    },
    {
      name: 'cow',
      img: 'images/cow.jpeg'
    },
    {
      name: 'cow',
      img: 'images/cow.jpeg'
    },
    {
      name: 'giraffe',
      img: 'images/giraffe.jpeg'
    },
    {
      name: 'giraffe',
      img: 'images/giraffe.jpeg'
    },
    {
      name: 'goat',
      img: 'images/goat.jpeg'
    },
    {
      name: 'goat',
      img: 'images/goat.jpeg'
    },
    {
      name: 'meerkat',
      img: 'images/meerkat.jpeg'
    },
    {
      name: 'meerkat',
      img: 'images/meerkat.jpeg'
    },
    {
      name: 'ox',
      img: 'images/ox.jpeg'
    },
    {
      name: 'ox',
      img: 'images/ox.jpeg'
    },
    {
      name: 'tiger',
      img: 'images/tiger.jpeg'
    },
    {
      name: 'tiger',
      img: 'images/tiger.jpeg'
    },
    {
      name: 'zebra',
      img: 'images/zebra.jpeg'
    },
    {
      name: 'zebra',
      img: 'images/zebra.jpeg'
    }  
  ]

  cardArray.sort(() => .5 - Math.random())


// create board
  const grid = document.querySelector('.grid')
  var cardsChosen = []
  var cardsChosenID = []
  var cardsWon = []



  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpeg')
      card.setAttribute('data-ID', i)
      card.addEventListener('click',flipCard)
      grid.appendChild(card)
    }
  }

  createBoard();

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneID = cardsChosenID[0]
    const optionTwoID = cardsChosenID[1]
    const resultDisplay = document.querySelector("#result")
    if (cardsChosen[0] === cardsChosen[1]){
      alert('You found a match!')
      cards[optionOneID].setAttribute('src','images/white.png')
      cards[optionTwoID].setAttribute('src','images/white.png')
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneID].setAttribute('src','images/blank.jpeg')
      cards[optionTwoID].setAttribute('src','images/blank.jpeg')
      alert('Sorry! Try again.')
    }
    cardsChosen = []
    cardsChosenID= []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = " Congratulations! You found them all."
    }
  }

  function flipCard() {
    var cardID = this.getAttribute('data-ID')
    cardsChosen.push(cardArray[cardID].name)
    cardsChosenID.push(cardID)
    this.setAttribute('src', cardArray[cardID].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }
  
})



