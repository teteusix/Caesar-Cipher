var alphabetum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var encrypted = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'];
var userText = document.getElementById('userText');
var btnToEncrypt = document.getElementById('encrypt');
var arrUserText =[];

// CHANGE THE USER WORD (STRING) TO AN ARRAY
function changeStringToArray() {
    var str = userText.value;
    var res = str.split('');
    arrUserText = res;
    console.log(arrUserText);
    return res;
}

changeStringToArray();

// THE MAGIC IS HERE! HERE ENCRYPT THE USER'S WORD
for (var i = 0; i < arrUserText.length; i++) {
  arrUserText[i];
  var word_e = arrUserText[i];
  var posAlpha = alphabetum.indexOf(word_e);
  var posEncry = encrypted[posAlpha];
  document.getElementById('temp').innerHTML += '<li><strong>'+word_e+'</strong> é <strong>'+encrypted[posAlpha]+'</strong></li>';
  document.getElementById('palavra').innerHTML += encrypted[posAlpha];
}
