
let length;
let width;
function calculateArea(){
    length=document.getElementById("length")
    width=document.getElementById("width")
    const result=+length.value*(+width.value)
    document.getElementById("result").innerHTML="resultat de la surface " + result
}


