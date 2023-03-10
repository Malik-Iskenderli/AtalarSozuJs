const btn =document.getElementById('btn');

const p=document.getElementById("joke");
const p2=document.getElementById("joke2");
const p3=document.getElementById("joke3");
const p4=document.getElementById("joke4");
const p5=document.getElementById("joke5");
const p6=document.getElementById("joke6");
const p7=document.getElementById("joke7");
const p8=document.getElementById("joke8");
const p9=document.getElementById("joke9");
const p10=document.getElementById("joke10");



function getAtalar(){
p.innerHTML=p2.style.display= "block".innerHTML=p2.innerHTML;
p2.innerHTML=p3.style.display= "block".innerHTML=p3.innerHTML;
p3.innerHTML=p4.style.display= "block".innerHTML=p4.innerHTML;
p4.innerHTML=p5.style.display= "block".innerHTML=p5.innerHTML;
p5.innerHTML=p6.style.display= "block".innerHTML=p6.innerHTML;
p6.innerHTML=p7.style.display= "block".innerHTML=p7.innerHTML;
p7.innerHTML=p8.style.display= "block".innerHTML=p8.innerHTML;
p8.innerHTML=p9.style.display= "block".innerHTML=p9.innerHTML;
p9.innerHTML=p10.style.display= "block".innerHTML=p10.innerHTML;
}
btn.addEventListener("click", getAtalar)