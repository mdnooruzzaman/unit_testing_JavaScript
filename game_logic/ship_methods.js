function checkForShip(player , coordinates) {
    var shipPresent , skip;

    for(var i = 0 ; i< player.ships.length ; i++){
        ship = player.ships[i];

        shipPresent = ship.location.filter(function (actualCoordinate) {
            return (actualCoordinate[0] === coordinates[0]) && (actualCoordinate[1] === coordinates[1]);
        })[0];

        if(shipPresent) {
            return true;
        }
}
return false;
}

    function damageShip(ship , coordinates) {
        ship.damage.push(coordinates);
    }

    function fire(player , coordinates){
        var ship = checkForShip(player , coordinates);
    }

module.exports.damageShip = damageShip;
module.exports.checkForShip = checkForShip;
module.exports.fire = fire;