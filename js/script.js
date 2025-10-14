//togle icon nav-bar
let menuIcon=document.querySelector('#menu-icon');
let navnar=document.querySelector('.navbar');


menuIcon.onclick=()=>{
   menuIcon.classList.toggle('bx-x') 
   navnar.classList.toggle('active') 
}
//scrool section 

let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')

window.onscroll=()=>{

    let header=document.querySelector('header') ;
    section.forEach(sec=> {
        let top =window.scrollY;
        let  ofset=sec.offsetTop - 100;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id')

        if(top >= ofset && top>ofset +height){
            navLinks.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+ id +'] ').classList.add('active')
            })

        }

    });

   header.classList.toggle('sticky', window.scrollY>100);
   menuIcon.classList.remove('bx-x') 
   navnar.classList.remove('active') 
}