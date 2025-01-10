const butt1=document.querySelector('#bt1');
const butt2=document.querySelector('#bt2');
const butt3=document.querySelector('#bt3');

const as1=document.querySelector('#ans1');
const as2=document.querySelector('#ans2');
const as3=document.querySelector('#ans3');

butt1.addEventListener('click',()=>{
    if(as1.classList.contains('hide-answer')){
        butt1.textContent='-';
        as1.classList.remove('hide-answer')
    }
    else{
        as1.classList.add('hide-answer')
        butt1.textContent='+';
    }
})
butt2.addEventListener('click',()=>{
    if(as2.classList.contains('hide-answer')){
        as2.classList.remove('hide-answer')
        butt2.textContent='-';}
    else{
        as2.classList.add('hide-answer')
        butt2.textContent='+';
    }
})
butt3.addEventListener('click',()=>{
    if(as3.classList.contains('hide-answer')){
        butt3.textContent='-';
        as3.classList.remove('hide-answer')}
    else{
        as3.classList.add('hide-answer')
        butt3.textContent='+';
    }
})