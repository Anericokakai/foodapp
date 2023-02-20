const nav=document.querySelector('nav')
const ul=nav.querySelector('ul')
const barsbtn=nav.querySelector('.fa-bars')
const xMarkbtn=nav.querySelector('.fa-xmark')

barsbtn.addEventListener('click', function(){
ul.classList.toggle('menu')
})

xMarkbtn.addEventListener('click',function(){
    ul.classList.toggle('menu')
 })


// scroll elemets
var nav_bar=document.querySelector('.navigation')
window.onscroll=()=>{
    myFunction();
}

var myFunction=()=>{
    var bd=document.querySelector('.two')
   
    if(document.body.scrollTop>40||document.documentElement.scrollTop>40){
        nav.style.position='fixed'
        nav.style.width='100%'
      
        
        ul.style.height='100vh'
        
        
    }else{
        nav.style.position=''
    }

}

const t =['rico','jemo','shawn']




