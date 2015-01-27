window.deckOfCards = function() {
  var pub = {};
  
  var suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
 
  var cards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

  var jokers = [
    {
      card : 'Joker',
      suit : 'Black'
    },
    {
      card : 'Joker',
      suit : 'Red'
    }
  ];
  
  pub.config = {
     useJokers : false,
     numberOfShuffles : 2
  };
  
  pub.init = function init() {
    deckOfCards.deck = shuffle(build_deck());
  }
  
  //this function will take our suits and our cards and generate an ordered deck of cards
  function build_deck() {
    //initialize an empty array to store our generated deck
    var deck = [];

    //loop through our suits
    for(var i = 0; i < suits.length; i++) {
      //this suit loop will run four times

      //loop through our cards
      for(var j = 0; j < cards.length; j++) {
        //this card loop will run 13 times
        //that means will be doing it 13 times for each suit which will give us our 52 cards

        //generate an object for this card that contains it's value and it's suit
        var card = {
          card : cards[j],
          suit : suits[i]
        };

        //push our card object into our deck array
        deck.push(card);
      }
    }

    if(deckOfCards.config.useJokers) {
      for(var i = 0; i < jokers.length; i++) {
        deck.push(jokers[i]);
      }
    }
    
    return deck;
  }
  
  //take the deck and shuffle it some number of times
  //we'll shuffle once by default, but can send any integer to this function as the times argument
  function shuffle(deck, times) {
    if(typeof times === 'undefined') {
      times = deckOfCards.config.numberOfShuffles;
    }

    var time = 0;

    while(time < times) {
      deck = shuffleDeck(deck);

      time++;
    }
    
    return deck;
  }
  
   function shuffleDeck(deck) {
    var deckShuffled = [];

    for(var i = 0, total = deck.length; i < total; i++) { //comment this line out and uncommen the line below it to see what happens if we don't define the total variable for our loop
      var rng = Math.floor((Math.random() * deck.length) + 0);

      deckShuffled.push(deck[rng]);

      deck.splice(rng, 1);
    }

    return deckShuffled;
  }
  
  return pub;
}();

window.site = function() {
  var pub = {};
  var deck = {};
  var player=["Me"];
  var dealer=["Computer"];
  
  pub.init = function init() {
    deckOfCards.init();
    
    deck = deckOfCards.deck;
    
    $('body').append('<ul id="cards"></ul>');
    
    startUp();
	
			var users ={
			player:player[i],
			dealer:dealer[j]	
			}
			
			function dealHand(){
			
			for (var i=0; i <player.length; i++)
			{
				for (var j=0; j <dealer.length; j++)
				{
					for (var j=0; j < user.length; j++)
					{
						user.push(deck[0]);
						deck.splice(0,1);
					}
					
				}
			}	
			
	
			
			  return pub;
		  	};
			
			dealHand();
			console.log(player);	
			
			/*function dealHand(){
			
			
			for (var j=0; j < 2; j++)
			{
				player.push(deck[0]);
				deck.splice(0,1);
			}
			  return pub;
		  	};
			
			dealHand();
			console.log(player);	
			*/
			
			
  };
  function startUp() {
    for(var i = 0, total = deck.length; i < total; i++) {
      $('#cards').append('<li class="' + deck[i].suit.toLowerCase() + ' ' + deck[i].card.toString().toLowerCase() + '">' + deck[i].card + ' of ' + deck[i].suit + '</li>');
    }

  }
  
  return pub;
}();

$(function() { 
  site.init();
  

}) 


