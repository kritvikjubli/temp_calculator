let celinp =document.querySelector('#c')
let fahinp =document.querySelector('#f')
let kelinp =document.querySelector('#k')

let button=document.querySelector("button");

const round=(number)=>{
    return Math.round(number*100)/100;
}

celinp.addEventListener('input',()=>{
    let ctemp= parseInt(celinp.value);
    let ftemp= (ctemp*(9/5)) +32;
    let ktemp =ctemp+273.15;
    fahinp.value = round(ftemp);
    kelinp.value = round(ktemp);
});

fahinp.addEventListener('input',()=>{
    let ftemp= parseInt(fahinp.value);
    let ctemp= (ftemp-32)* (5/9);
    let ktemp =(ftemp-32)*(5/9 )+273.15;
    celinp.value = round(ctemp);
    kelinp.value = round(ktemp);
});


kelinp.addEventListener('input',()=>{
    let ktemp= parseInt(kelinp.value);
    let ftemp= (ktemp-273.15)*(9/5) +32;
    let ctemp =ktemp-273.15;
    fahinp.value = round(ftemp);
    celinp.value = round(ctemp);
});



button.addEventListener('click',()=>{
    c.value="";
    fahinp.value="";
    kelinp.value="";
});