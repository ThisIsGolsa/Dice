
// T-REX ONE

var randomNum1 = Math.floor((Math.random() * 6))+ 1;

var randomDiceImg1 = "DiceG" + randomNum1 + ".svg";

var diceImgSrc1 = "./Images/Green/" + randomDiceImg1;

var image1 = document.querySelector(".img1");

image1.setAttribute("src" , diceImgSrc1);

// T-REX ONE



// T-REX TWO

var randomNum2 = Math.floor((Math.random() * 6))+ 1;

var randomDiceImg2 = "DiceP" + randomNum2 + ".svg";

var diceImgSrc2 = "./Images/Pink/" + randomDiceImg2;

var image2 = document.querySelector(".img2");

image2.setAttribute("src" , diceImgSrc2);

// T-REX TWO



if (randomNum1 > randomNum2){

    var res = "!تیرکس اولی برد"
    document.querySelector("h1").innerHTML = res

}
else if (randomNum1 < randomNum2){

    var res = "!تیرکس دومی برد"
    document.querySelector("h1").innerHTML = res

}
else{
    document.querySelector("h1").innerHTML = "هه! مساوی شد"
}