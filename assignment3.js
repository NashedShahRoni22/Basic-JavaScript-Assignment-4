//first problem
function radianToDegree (radian){
    if(radian > 0){
        const degree = (radian * (180/Math.PI)).toFixed(2);
        return degree;
    }else{
        return "Enter a valid number!"
    }
     
}
const radian = 10;
const result = radianToDegree(radian);
// console.log("Degree:",result);

//second problem
function isJavaScriptFile(fileName){
    if(typeof fileName == 'string'){
        if(fileName.endsWith('.js')){
            return true;
        }else{
            return false;
        }
    }else{
        return 'Enter a valid file name!'
    }
}
const fileName = 'index.html.png.js';
const result2 = isJavaScriptFile(fileName);
// console.log(result2);

//third problem
function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if(dieselQuantity>=0 && petrolQuantity >=0 && octaneQuantity >=0){
        const dieselLittre = 114;
        const petrolLittre = 130;
        const octaneLittre = 135;

        const dieselPrice = dieselLittre * dieselQuantity;
        const petrolPrice = petrolLittre * petrolQuantity;
        const octanePrice = octaneLittre * octaneQuantity;

        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }else{
        return 'Enter a valid Quantity!'
    }
}

const dieselQuantity = 0;
const petrolQuantity = 2;
const octaneQuantity = 3;
const result3 = oilPrice(dieselQuantity, petrolQuantity, octaneQuantity);
console.log(result3);

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
const people = 50;
const result4 = publicBusFare(people);
// console.log("Fare for Public Bus:",result4); 

//-----------------------------------------------------
//-----------------------------------------------------
//Final Problem
//------------------------------------------------------
//------------------------------------------------------
function isBestFriend(firstFriend, secondFriend){
    if(firstFriend.name.toLowerCase() == secondFriend.friend.toLowerCase() 
    && secondFriend.name.toLowerCase() == firstFriend.friend.toLowerCase()){
        return true;
    }
    else{
        return false;
    }
}
const firstFriend = {name:"ABUL",friend:"babul"};
const secondFriend = {name:"babul",friend:"ABUL"};
const result5 = isBestFriend(firstFriend,secondFriend);
// console.log(result5);