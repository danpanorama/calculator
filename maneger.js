class Maneger{


initProject(){
let btn=document.getElementById('btn').addEventListener('click',()=>{
  let data=document.getElementById('inputval').value;
    let data1=document.getElementById('inputval');
  let result=document.getElementById('result');
  let selection =document.getElementById('selection');
let page2=document.getElementById('page2');
let page2inter=document.getElementById('page2inter');




if (selection.selectedIndex==1) {

let ran=new RandomNumber;

ran.randomarrfunc()
page2inter.innerText=ran.randomarrfunc
}
else if (selection.selectedIndex==0) {
  let prime=new Prime
  prime.data=data
  result.innerHTML=prime.calcNumbers(data)
  page2inter.innerText=prime.calcNumbers
}
else if (selection.selectedIndex==2) {

let dolar = new Dolar;
dolar.data=data
dolar.howisindolar(data);
  page2inter.innerText=dolar.howisindolar
result.innerHTML=dolar.howisindolar(data)
}
else if (selection.selectedIndex==3) {

}
else if (selection.selectedIndex==4) {

}
else if (selection.selectedIndex==5) {

}

})


}



}
