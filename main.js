let size=parseInt(prompt("Enter the size of the array"));
let a=[];
for(i=0;i<size;i++){
  a[i]=parseFloat(prompt("enter the value for "+(i+1) ));
}

document.write(`Given array = [ ${a} ] <br><br>`);

let iterate=(a)=>{
  
  for(res of a){
    document.write(`${res} <br>`)
  }
}

let divide=(num1,ans)=>{
  ans(num1);
}

divide(a,iterate)

