//My navigation class
class navigation{
    constructor(){
        this.nav = document.querySelector('.nav.nav--style');   
    }
    
    setFixed(requirePositionForFixing){
        let navCureentPosition = this.nav.offsetTop;
        if(navCureentPosition < requirePositionForFixing){
            this.nav.classList.add('nav--position');
        }else{
            this.nav.classList.remove('nav--position');
        }
    }
    
    getNav = ()=>{
        return this.nav;
    }
}
//Calling of my class by creating object
window.addEventListener('scroll', function(){
    const nav = new navigation();
    nav.setFixed(this.scrollY);
});