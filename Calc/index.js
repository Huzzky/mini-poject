'use strict'
calc = "";
countForInput = "";
arrayCount = [];
arraySymbol = [];
count = 0;


function test(obj) {

    let input = document.getElementById('inputCalc');

    if (obj.id==="clear") {

        input.value = "";
        countForInput = "";
        arrayCount = [];
        arraySymbol = [];

    }
    else if (obj.id!== "=" && obj.id!=="clear") {

        countForInput = countForInput + obj.id;
        input.value = countForInput;

    }
    
    symbolId = obj.id;
    checkSym = symbolId.match(/[+-/%=*]/gi);

    if (checkSym===null) {

        calc = calc + symbolId;

    } else if (checkSym!==null) {

        if (calc!=="") {

            if (symbolId==="+") {

                arraySymbol.push("+");
                arrayCount.push(calc);
                calc = "";

            } else if (symbolId==="-") {

                arraySymbol.push("-");
                arrayCount.push(calc);
                calc = "";

            }else if (symbolId==="*") {

                arraySymbol.push("*");
                arrayCount.push(calc);
                calc = "";

            }else if (symbolId==="/") {

                arraySymbol.push("/");
                arrayCount.push(calc);
                calc = "";

            } else if (symbolId==="=") {

                arrayCount.push(calc);
                calc = "";
                
                if ((arraySymbol.length - 1) !== arrayCount.length && arrayCount.length > 1 && (arraySymbol.length - 1) < arrayCount.length) {

                    console.log(arrayCount);
                    console.log(arraySymbol);
                    priorityOfCharacters(arraySymbol, arrayCount, count)
                    arraySymbol = [];
                    arrayCount = [];

                }
            }
        } else {
            
            return;

        }
    }
    
}

function priorityOfCharacters(arraySymbol, arrayCount, count) {
    let h1 = document.getElementById('answer');
        if (arraySymbol[count]==="*") {

            arrayCount[count] = parseInt(arrayCount[count]) * parseInt(arrayCount[count+1])
            arrayCount.splice(count+1, 1);
            arraySymbol.splice(count, 1)
            priorityOfCharacters(arraySymbol, arrayCount, count)
            
        } else if (arraySymbol[count] === '/') {

            // TODO сделать исключения, что нельзя делить на ноль
            if (parseInt(arrayCount[count+1])===0) {
                h1.textContent = "На ноль делить нельзя"
            }
            arrayCount[count] = parseInt(arrayCount[count]) / parseInt(arrayCount[count+1])
            arrayCount.splice(count+1, 1);
            arraySymbol.splice(count, 1)
            priorityOfCharacters(arraySymbol, arrayCount, count)

        } else if (arraySymbol[count] === "-") {
            
            arrayCount[count] = parseInt(arrayCount[count]) - parseInt(arrayCount[count+1])
            arrayCount.splice(count+1, 1);
            arraySymbol.splice(count, 1)
            priorityOfCharacters(arraySymbol, arrayCount, count)

        } else if (arraySymbol[count] === '+') {

            arrayCount[count] = parseInt(arrayCount[count]) + parseInt(arrayCount[count+1])
            arrayCount.splice(count+1, 1);
            arraySymbol.splice(count, 1)
            priorityOfCharacters(arraySymbol, arrayCount, count)

        } else if (arrayCount[0] === Infinity){

            h1.textContent = "Нельзя делить на ноль";

        } else if (arrayCount[0] !== Infinity || arrayCount[0] !== NaN || arrayCount[0] !== null || arrayCount[0] !== undefined) {
            h1.textContent = arrayCount[0]
        }

}