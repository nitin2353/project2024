// expander menu
let a;
const showMenu=(toggleId,navId)=>{
    const toggle= document.getElementById(toggleId),
    nav=document.getElementById(navId)
 
    if(a==1){
        nav.classList.toggle('show');
        toggle.classList.toggle('fa-bars');
        a=0;
    }
    else{
        nav.classList.toggle('show');
        toggle.classList.toggle('fa-x');
        a=1;
    }
}



// active and remove menu
const navlink=document.querySelectorAll('.nav_link')
function linkAction(){
    navlink.forEach(n =>n.classList.remove('active'))
    this.classlist.add('active')
}
navlink.forEach(n => n.addEventListener('click',linkAction))
//navbar scroll colour
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav'); // Replace '.navbar' with your navbar's selector
    const scroll = 100; // Adjust this value as needed
  
    if (window.scrollY > scroll) {
      navbar.classList.add('scrolled'); // Add a class to change the color
    } else {
      navbar.classList.remove('scrolled'); // Remove the class when scrolling back up
    }
  });
  // loading.............
function loadpage(){
    // alert('deon')
    document.querySelector('.loading').style="display:flex;"
    setTimeout(hideloader,6000);
    function hideloader(){
        document.querySelector('.loading').style="display:none;"
    }
}

