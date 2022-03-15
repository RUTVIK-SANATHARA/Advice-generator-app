let button = document.querySelector(".button");

async function getData(){
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();
    // console.log(data.slip);
   let num= document.querySelector(".id");
   let para= document.querySelector(".para p");
   num.innerHTML=data.slip.id;
   para.innerHTML=data.slip.advice;
}

getData();