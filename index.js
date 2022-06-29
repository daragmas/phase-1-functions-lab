function distanceFromHQInBlocks(){
    let pickup = 10
    if (pickup < 50){
        return 50 - pickup;
    }
    else{
        return pickup - 50;
    }
}

function distanceFromHQInFeet(blocks){
    return distanceFromHQInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(startTrip,endTrip){
    if (startTrip > endTrip){return (startTrip-endTrip)*264}
    else{return (endTrip-startTrip)*264}
}

function calculatesFarePrice(startTrip, endTrip){
    let distance = distanceTravelledInFeet(startTrip,endTrip)
    if (distance <= 400){return 0}
    else if (distance<2000){return (distance-400)*.02}
    else if (distance<2500){return 25}
    else if (distance > 2500){return 'cannot travel that far'}
}