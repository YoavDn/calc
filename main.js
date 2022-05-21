'use strict'


const elInputBox = document.querySelector('.input-text');
const elTd = document.querySelectorAll('td');


// var gnum0
// var gnum1
// var gnum2
// var gnum3
// var gnum4
// var gnum5
// var gnum6
// var gnum7
// var gnum8
// var gnum9



 var gCurrNum = elInputBox.innerHTML
 var isNextNum = false
 var gNextNum = 0
 elInputBox.innerText = ''



function updateInputBox(elTd) {
    gCurrNum = +gCurrNum
    gNextNum = +gNextNum
   

    if(!isNextNum) {
        gCurrNum += elTd.innerText
        elInputBox.innerText += elTd.innerText

    }

    if(isNextNum) {
        console.log(gCurrNum)
        gNextNum += elTd.innerText
    
        elInputBox.innerText += elTd.innerText
        console.log(gNextNum)

    }

    

   
  
}

function makeCalc(elTdSign) {
    gCurrNum = +gCurrNum
    gNextNum = +gNextNum

    elInputBox.innerText = ''
    
    if (elTdSign.innerText === '+') {
        gCurrNum += gNextNum
        console.log(gCurrNum)
        isNextNum = true
        
    }
    if (elTdSign.innerText === '-') {
        gCurrNum -= gNextNum
        console.log(gCurrNum)
        isNextNum = true
        
        
    }
    if (elTdSign.innerText === '*') {
        if(!isNextNum)  {
            isNextNum = true
             return
        }
        gCurrNum *= gNextNum
        console.log(gCurrNum)
        
    }
    if (elTdSign.innerText === '/') {
        if(!isNextNum)  {
            isNextNum = true
             return
        }
        gCurrNum /= gNextNum
        console.log(gCurrNum)
        
        
    }
    if (elTdSign.innerText === '=') {
        elInputBox.innerText = gCurrNum
    
    }
    gNextNum = 0
}

