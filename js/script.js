function headingChange(){
    document.getElementById("hjs").innerHTML="Hello JavaScript!!!";
    document.getElementsByClassName("css_effect")[0].innerHTML="Text has been changed!!";
    document.getElementsByClassName("css_effect")[1].style.color="#0d6efd";
    document.getElementsByClassName("css_effect")[2].style.fontSize="60"+"px";
    document.getElementsByClassName("css_effect")[2].style.backgroundColor="#0d6efd";
}
function mOver(obj){
    obj.innerHTML="Thank You";
    obj.style.backgroundColor="red";
}
function mOut(obj){
    obj.innerHTML="Mouse in";
    obj.style.backgroundColor="#0d6efd";
}
function ddate(){
    document.getElementById("time").innerHTML=Date();
}