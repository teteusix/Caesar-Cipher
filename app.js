var alphabetum = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var encrypted = ['d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','b','c'];
var normalText = document.getElementById('normalText');
var btnEncrypt = document.getElementById('encrypt');
var arrText =[];

vNormalText = normalText.value;

function changeStringToArray() {
    var str = vNormalText;
    var res = str.split('');
    arrText = res;
    console.log(arrText);
    return res;
}

changeStringToArray();



var pos = alphabetum.indexOf('t');
