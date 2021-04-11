//header size changing
$(document).ready(()=>{
    $(window).scroll(()=>{
        if($(window).scrollTop()>0){
            $('header').addClass('change-zoom')
        }else{
            $('header').removeClass('change-zoom')
        }
    })
    $(window).scroll(function(){
        if($(window).scrollTop()>600){
            $('header').addClass('headerColor');
        }else{
            $('header').removeClass('headerColor');
        }
    })
})


//changing background image
let headBackground = document.querySelector('.head-backgroundImg');
let i=0;
let backgroundImg =["url('images/bg1.png')", "url('images/bg2.png')", "url('images/bg3.png')","url('images/bg4.png')", "url('images/BG-img.png')"];
function changeBackgroundImg(){
    headBackground.style.backgroundImage = backgroundImg[i];
    headBackground.style.backgroundSize="cover";
    headBackground.style.width = "100%";
    headBackground.style.transition="0.5s";
    console.log('hello world');
    i++;
    if(i>4){
        i=0;
    }
}
setInterval(changeBackgroundImg, 5500);

//side-bar and burgera
let burgerIcon = document.querySelector('.burger-bar');
let burgerBtn = burgerIcon.firstElementChild;
let sideBar = document.querySelector('.side-bar');
burgerIcon.addEventListener('click', ()=>{
    if(!burgerBtn.classList.contains('fa-times')){
        burgerBtn.classList.remove('fa-bars');
        burgerBtn.classList.add('fa-times');
        sideBar.style.transform = "translate(0)";
    }else{
        burgerBtn.classList.remove('fa-times');
        burgerBtn.classList.add('fa-bars');
        sideBar.style.transform = "translate(-100%)";
    }
})

function closeSide(){
    sideBar.style.transform = "translate(-100%)";
    burgerBtn.classList.remove('fa-times');
    burgerBtn.classList.add('fa-bars');
}

sideBar.firstElementChild.firstElementChild.childNodes.forEach((x)=>{
    x.addEventListener('click', closeSide);
})
 document.querySelectorAll('section').forEach(x=>{
    x.addEventListener('click', closeSide);
 });
 document.querySelector('footer').addEventListener('click', closeSide);

 //adding in favourites

 let basket = document.querySelector('.adding-basket');
 let favs = document.querySelector('.fav-added');
 let boxes = document.querySelectorAll('.sec2-box');
 boxes.forEach((x)=>{
    x.firstElementChild.addEventListener('click', ()=>{
        if(!x.classList.contains('added')){
            x.firstElementChild.style.backgroundColor = "rgba(255, 60, 0, 0.774)";
            x.firstElementChild.style.color = "white";
            x.classList.add('added');
            alert('added');
        }else{
            x.classList.remove('added');
            x.firstElementChild.style.backgroundColor = "white";
            x.firstElementChild.style.color = "#E76F51";
            alert('removed');
        }
    });
 });


 function closeFav(){
    favs.style.display="none";
}
sideBar.addEventListener('click', closeFav);
document.querySelector('header').addEventListener('click', closeFav);
document.querySelectorAll('section').forEach(x=>{
    x.addEventListener('click', closeFav);
 });
 document.querySelector('footer').addEventListener('click', closeFav);

 basket.addEventListener('click', ()=>{
    if(!basket.classList.contains('x')){
        favs.style.display="flex";
        basket.classList.add('x');
    }else{
        favs.style.display="none";
        basket.classList.remove('x');
    }
 });
