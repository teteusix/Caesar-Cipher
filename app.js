var alphabetum = [' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var encrypted = [' ','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'];
var userText = document.getElementById('userText');
var btnToEncrypt = document.getElementById('encrypt');
var arrUserText =[];
var word ='';

// CHANGE THE USER WORD (STRING) TO AN ARRAY
function changeStringToArray() {
    var str = userText.value.toLowerCase();
    var res = str.split('');
    arrUserText = res;
    console.log(arrUserText);
    return res;
}


// INPUT VALIDADION
function inputValid() {
  if (userText.value == "") {
    document.getElementById('palavra').innerHTML = '<strong style="color:#c0392b">The input is empty, please insert a word</strong>';
    userText.style.border = '1px solid #c0392b';
    // #c0392b
  } else {
    userText.style.border = '1px solid #3498db';
    arrUserText=[];
    document.getElementById('temp').innerHTML ='';
    document.getElementById('palavra').innerHTML ='';
    word ='';
    encrypt();
  }
  return true;
}

function encrypt() {
    changeStringToArray();

    // THE MAGIC IS HERE! HERE ENCRYPT THE USER'S WORD
    for (var i = 0; i < arrUserText.length; i++) {
      arrUserText[i];
      var letter = arrUserText[i];
      console.log(letter);
      // if (letter == 'a') {
      //   console.log('Oie');
      //   word +=encrypted[posAlpha];
      // } else {
      // console.log('tchau');
      // }
        var posAlpha = alphabetum.indexOf(letter);
        var posEncry = encrypted[posAlpha];
        document.getElementById('temp').innerHTML += '<li><strong>'+letter+'</strong> é <strong>'+encrypted[posAlpha]+'</strong></li>';
        document.getElementById('palavra').innerHTML += encrypted[posAlpha];

        word +=encrypted[posAlpha];
    }
    console.log(word);
    return word;
}
