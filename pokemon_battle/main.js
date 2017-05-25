$(document).ready(function(){
    var game = {
        players: [],
        addPlayer: function(){}
    };

    function playerConstructor(name){
        player = {};
        player.name = name;
        player.hand = [];
        player.addCard = function(card){
            player.hand.push(card);
        };
        return player;
    };

    function addCard(player)
    {
        $.get(`http://pokeapi.co/api/v1/pokemon/1/`, function(res) {
            if(res) {
                console.log(res);
            }
        }, "json");
    }

    let larry = new playerConstructor('Larry');
    addCard(larry);
    game.players.push(larry);

    console.log(game)

});