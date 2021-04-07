//nav bar code variable's declaration
let barsMenu = document.querySelector('.bars-menu');
let navBar = document.querySelector('.navbar__nav1');
let itemLink2 = document.querySelector('.item2');
let itemLink3 = document.querySelector('.item3');
let itemLink4 = document.querySelector('.item4');
let itemLink5 = document.querySelector('.item5');
//change bars to cross or close to bars, and show navItems or hidde it
barsMenu.addEventListener('click', function(){
    if(barsMenu.classList.contains('fa-bars')){
        barsMenu.classList.remove('fa-bars');
        barsMenu.classList.add('fa-close');
        barsMenu.style.color = 'red';
        navBar.classList.add('show-navbar');
    } else{
        barsMenu.classList.remove('fa-close');
        navBar.classList.remove('show-navbar');
        barsMenu.classList.add('fa-bars');
        navBar.classList.add('hide-navbar');
        barsMenu.style.color = '#000';
    }
});

itemLink2.addEventListener('click', function(){
    navBar.classList.remove('show-navbar');
    navBar.classList.add('hide-navbar');
    barsMenu.classList.remove('fa-close');
    barsMenu.classList.add('fa-bars');
    barsMenu.style.color = '#000';
});

itemLink3.addEventListener('click', function(){
    navBar.classList.remove('show-navbar');
    navBar.classList.add('hide-navbar');
    barsMenu.classList.remove('fa-close');
    barsMenu.classList.add('fa-bars');
    barsMenu.style.color = '#000';
});

itemLink4.addEventListener('click', function(){
    navBar.classList.remove('show-navbar');
    navBar.classList.add('hide-navbar');
    barsMenu.classList.remove('fa-close');
    barsMenu.classList.add('fa-bars');
    barsMenu.style.color = '#000';
});

itemLink5.addEventListener('click', function(){
    navBar.classList.remove('show-navbar');
    navBar.classList.add('hide-navbar');
    barsMenu.classList.remove('fa-close');
    barsMenu.classList.add('fa-bars');
    barsMenu.style.color = '#000';
});


