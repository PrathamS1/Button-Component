function disableButton(param){
    if (param=='checkbox'){
        const check=document.getElementById(param);
        const btn1=document.getElementById('disabled');
        if (check.checked==true){
            btn1.checked=true;
            btn1.style.cursor="not-allowed";
        }
        else{
            btn1.checked=false;
            btn1.style.cursor="pointer";
        }
    }
    else if (param=='checkbox2'){
        const check=document.getElementById(param);
        const btn2=document.getElementById('textDisabled');
        if (check.checked==true){
            btn2.checked=true;
            btn2.style.cursor="not-allowed";
        }
        else{
            btn2.checked=false;
            btn2.style.cursor="pointer";
        }
    }
}
function changeSize(){
    const value=document.getElementById('sizes');
    const btn=document.getElementById('differentSizes');
    if (value.value=='medium'){
        btn.style.width='5.0625rem';
        btn.style.height='2.25rem';
    }
    else if (value.value=='large'){
        btn.style.width='5.8125rem';
        btn.style.height='2.625rem';
    }
    else if (value.value=='small'){
        btn.style.width='4.5625rem';
        btn.style.height='2rem';
    }   
}
function iconSelect(){
    const value = document.getElementById('icons');
    const icons = document.getElementById('icon');
    if (value.value=='bag'){
        icons.innerText = 'shopping_bag';
    }
    else if (value.value=='cart'){
        icons.innerText = 'shopping_cart';
    }
    else if (value.value=='work'){
        icons.innerText = 'work';
    }
    else if (value.value=='store'){
        icons.innerText = 'storefront';
    }
    else if (value.value=='savings'){
        icons.innerText = 'savings';
    }
}
function position(){
    const span = document.getElementById('icon');
    const value=document.getElementById('position');
    if (value.value=='right'){
        icon.style.float='right';
        icon.style.margin='0 0.5rem 0 0';
    }
    else if (value.value=='left'){
        icon.style.float='left';
    }
}