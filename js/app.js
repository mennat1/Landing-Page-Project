/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport(element){
    const bounding = element.getBoundingClientRect();
    return(
        bounding.top >= 0
    );
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBarMenu(){
	for(let i=0; i < sections.length; i++){
        const navBarItem = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav');
        const sectionLink = sections[i].getAttribute('id');
        navBarItem.innerHTML = `<a class='navBarItemLink' href=#${sectionLink}>${sectionName}</a>`;
        navBar.appendChild(navBarItem);
    }
    
}


// Add class 'active' to section when near top of viewport
function changeActiveClass(){
    for(let i=0; i < sections.length; i++){
        if(isInViewport(sections[i])){
            sections[i].classList.add("your-active-class");
        }else{
            sections[i].classList.remove("your-active-class");
        }
    }
}


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', changeActiveClass);

// Build menu 
buildNavBarMenu();

// Scroll to section on link click

// Set sections as active


