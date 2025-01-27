const menuList = document.getElementById('navMenuList');
const menuButton = document.getElementById('navButton');
const currentTransform = getComputedStyle(menuButton).getPropertyValue('--after-transform');
function toggleButtonVisibility() {
    if (menuList.style.visibility === 'hidden') {
        menuList.style.visibility = 'visible'
        menuButton.style.setProperty('--after-transform', 'rotate(-45deg)');
    } else {
        menuList.style.visibility = 'hidden';
        menuButton.style.setProperty('--after-transform', 'rotate(135deg)');
    }
}
menuButton.addEventListener('click', toggleButtonVisibility);


// Swiper Code

const buttonOne = document.getElementById('swiperButtonOne');
const buttonTwo = document.getElementById('swiperButtonTwo');
const swiperTextOne = document.getElementById('swiperTextOne');
const swiperTextTwo = document.getElementById('swiperTextTwo');
const swiperImgOne = document.getElementById('swiperImgOne');
const swiperImgTwo = document.getElementById('swiperImgTwo');
const artistLinkOne = document.getElementById('artistLinkOne');

function swiperTransitionOneToTwo() {
    // Check the background color of buttonOne
    if (getComputedStyle(buttonOne).backgroundColor === 'rgb(0, 0, 0)') { // Black color in RGB
        swiperTextOne.style.visibility = 'hidden';
        swiperTextTwo.style.visibility = 'visible';
        swiperImgOne.style.visibility = 'hidden';
        swiperImgTwo.style.visibility = 'visible';
        artistLinkOne.style.visibility = 'hidden';

        // Change button colors
        buttonOne.style.backgroundColor = 'white';
        buttonOne.style.color = 'black';
        buttonTwo.style.backgroundColor = 'black';
        buttonTwo.style.color = 'white'
    }
}

function swiperTransitionTwoToOne() {
    // Check the background color of buttonTwo
    if (getComputedStyle(buttonTwo).backgroundColor === 'rgb(0, 0, 0)') { // Black color in RGB
        swiperTextOne.style.visibility = 'visible';
        swiperTextTwo.style.visibility = 'hidden';
        swiperImgOne.style.visibility = 'visible';
        swiperImgTwo.style.visibility = 'hidden';
        artistLinkOne.style.visibility = 'visible'


        // Change button colors
        buttonOne.style.backgroundColor = 'black';
        buttonOne.style.color = 'white'
        buttonTwo.style.backgroundColor = 'white';
        buttonTwo.style.color = 'black'
    }
}

buttonTwo.addEventListener('click', swiperTransitionOneToTwo);
buttonOne.addEventListener('click', swiperTransitionTwoToOne);
