class RandomNumber{


randomarrfunc(callBack){

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

document.getElementById('result').innerHTML=`    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
    <div class="div"></div>
`

for (var i = 0; i < 10; i++) {
  let num =getRndInteger(1,10);
setTimeout(req,getRndInteger(0,10000),i,num);
}


let pointer=0;
let arr=[];

function req(index,num){
  arr.push(num);
  console.log(arr);
  console.log(num+' '+index);
  let div=document.getElementsByClassName('div');

div[index].innerHTML='x';


while (div[pointer].innerHTML=='x') {
  div[pointer].innerHTML=arr[pointer];
  pointer++
}

}


}


}
