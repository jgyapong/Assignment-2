function countVowelsAndConsonants() {
    var word = document.getElementById("consonants");
    var text = word.value;
    let vowelCount = 0;
    let consonantCount = 0;
    var str = text.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if(/[a-z]/.test(str[i])) {
            if (/[aeiou]/.test(str[i])) {
                vowelCount++;
            } else {
                consonantCount++;
            }
        }
    }

   document.getElementById("answer").textContent="Vowels= " + vowelCount+ " ,Constant =  " + consonantCount;
}

function pal(){
    var inputString = document.getElementById("numberstring");
    var text = inputString.value;
   
    var AnswerDiv = document.getElementById("res");

    var reversed = '';
    for (var i = text.length - 1 ; i >= 0; i--){
        reversed += text[i];
    }
    if (text === reversed) {
        AnswerDiv.textContent = "is a palindrome";
    } else {
        AnswerDiv.textContent = "isn't a palindrome";
    }
}


function totalamt(){
    var bill = parseFloat(document.getElementById("subtotal").value);
    var tip = parseFloat(document.getElementById("tip").value);
    var totalAmount = bill + tip;
    document.getElementById("total").textContent = "Total:$" + totalAmount;
  
}