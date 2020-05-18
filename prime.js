class Prime{
  data;
   constructor(data){
     this.data=data;
   }
calcNumbers(callBack){
  let arr=[];
  let data =document.getElementById('inputval').value
  for (var i = 0; i < data; i++) {
  let counter=false
  for (var j = 2; j <= i; j++) {
    if (i%j===0&& j!==i) {
      counter=true;

    }
  }
  if (counter==false) {
    arr.push(i)
  }
  }
return arr

}

}
