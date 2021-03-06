const slide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const bigTitle = document.querySelector('.big-title');

    burger.addEventListener('click' , ()=>{
        nav.classList.toggle('burger-active');

        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ``;
            }else{
                link.style.animation = `fade 0.5s ease forwards ${index/7 + 0.5}s`
            }
        });

        burger.classList.toggle('toggle');
    });
}

slide();

