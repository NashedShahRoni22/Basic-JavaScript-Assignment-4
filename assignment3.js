//-----------------------------------------------------
//-----------------------------------------------------
//first problem
//------------------------------------------------------
//------------------------------------------------------
function radianToDegree (radian){
    const degree = radian * (180/Math.PI);
    return degree; 
}
const radian = 1;
const result = radianToDegree(radian).toFixed(2);
// console.log("Degree:",result);




//-----------------------------------------------------
//-----------------------------------------------------
//second problem
//------------------------------------------------------
//------------------------------------------------------
function isJavaScriptFile(fileName){
    if(fileName.endsWith('.js')){
        return true;
    }else{
        return false;
    }
}
const fileName = 'index.js';
const result2 = isJavaScriptFile(fileName);
// console.log(result2);


//-----------------------------------------------------
//-----------------------------------------------------
//third problem
//------------------------------------------------------
//------------------------------------------------------
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    const dieselLittre = 114;
    const petrolLittre = 130;
    const octaneLittre = 135;

    const dieselPrice = dieselLittre * dieselQuantity;
    const petrolPrice = petrolLittre * petrolQuantity;
    const octanePrice = octaneLittre * octaneQuantity;

    const totalPrice = dieselPrice + petrolPrice + octanePrice;
    return totalPrice;
}

const dieselQuantity = 1;
const petrolQuantity = 1;
const octaneQuantity = 1;
const result3 = oilPrice(dieselQuantity, petrolQuantity, octaneQuantity);
// console.log(result3);

//-----------------------------------------------------
//-----------------------------------------------------
//fourth problem
//------------------------------------------------------
//------------------------------------------------------

function publicBusFare(people){
    const busCapacity = 50;
    const microbusCapacity = 11;
    const ticketPrice = 250;

    const peopleForMicrobus = people % busCapacity;
    const peopleForPublicBus = peopleForMicrobus % microbusCapacity;
    const publicBusFare = peopleForPublicBus * ticketPrice;

    return publicBusFare; 
}
const people = 65;
const result4 = publicBusFare(people);
console.log("Fare for Public Bus:",result4); 