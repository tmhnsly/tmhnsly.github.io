// NAV BAR

function hamburgerOpen() {
    let navMenu = document.getElementById('navBar');

    navMenu.classList.add('open');
}

// DARK MODE STYLE

function darkModeToggle() {
    let darkModeToggle = document.getElementById("darkModeToggle");

    darkModeToggle.click();
    lightswitch();

    function lightswitch() {
    
        if(darkModeToggle.checked != true){
            lightMode();
        } else {
            darkMode();
        }
    }
    console.log(darkModeToggle.checked);
}

function darkMode() {
            logoDarkMode();
            navBarDarkMode();
            textColorDarkMode();
            pageBackgroundDarkMode();
            portfolioItemDarkMode();
            linksDarkMode();
}

function textColorDarkMode() {
 let pageText = document.getElementById('pageContent');

 pageText.style.color = '#ffffff';
 pageText.style.transition = 'color 2s';
}

function pageBackgroundDarkMode() {
    let pageBackground = document.getElementById('pageBody');

    pageBackground.style.background = "#121212";
}

function logoDarkMode() {
    let triangle = document.getElementById('logoTriangle');
    let circleLower = document.getElementById('logoCircleLower');
    let circleUpper = document.getElementById('logoCircleUpper');
    let logobackground = document.getElementById('navLogoBackground');
    let text = document.getElementById('logoText');

    circleLower.style.fill = '#FDAE47';
    circleLower.style.transform = 'translate(-60px)';

    triangle.style.fill = 'rgba(65, 72, 80, 0.8)';

    circleUpper.style.stroke = '#CFD1D3';
    circleUpper.style.transform = 'translate(-60px)';

    logobackground.style.background = '#CFD1D3';

    text.style.color = '#414850';

}

function navBarDarkMode() {
    let homeButton = document.getElementById('homeButton');
    let contactButton = document.getElementById('contactButton');
    let darkModeButton = document.getElementById('darkModeToggle');

    homeButton.style.background = '#B3B6B9';

    contactButton.style.background = '#5E636A';

    darkModeButton.style.color = '#FDAE47';
}

function portfolioItemDarkMode() {
    let aptitudeLogo = document.getElementById('aptitudeTestLogo');

    aptitudeLogo.style.filter = 'invert(1)';
}

function linksDarkMode() {
    let linkTray = document.getElementById('linkTray');
    
    linkTray.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
}

// LIGHT MODE

function lightMode() {
    logoLightMode();
    navBarLightMode();
    textColorLightMode();
    pageBackgroundLightMode();
    portfolioItemLightMode();
    linksLightMode();
}

function textColorLightMode() {
let pageText = document.getElementById('pageContent');

pageText.style.color = '#000000';
pageText.style.transition = 'color 2s';
}

function pageBackgroundLightMode() {
let pageBackground = document.getElementById('pageBody');

pageBackground.style.background = "#FFFFFF";
}

function logoLightMode() {
let triangle = document.getElementById('logoTriangle');
let circleLower = document.getElementById('logoCircleLower');
let circleUpper = document.getElementById('logoCircleUpper');
let logobackground = document.getElementById('navLogoBackground');
let text = document.getElementById('logoText');

circleLower.style.fill = '#ffffff';
circleLower.style.transform = 'translate(0px)';

triangle.style.fill = 'rgba(253, 174, 71, 0.8)';

circleUpper.style.stroke = '#414850';
circleUpper.style.transform = 'translate(0px)';

logobackground.style.background = '#414850';

text.style.color = '#FFFFFF';

}

function navBarLightMode() {
let homeButton = document.getElementById('homeButton');
let contactButton = document.getElementById('contactButton');
let darkModeButton = document.getElementById('darkModeToggle');

homeButton.style.background = '#5E636A';

contactButton.style.background = '#B3B6B9';

darkModeButton.innerHTML = '☀';
}

function portfolioItemLightMode() {
let aptitudeLogo = document.getElementById('aptitudeTestLogo');

aptitudeLogo.style.filter = 'invert(0)';
}

function linksLightMode() {
let linkTray = document.getElementById('linkTray');

linkTray.style.backgroundColor = 'rgba(0, 0, 0, 0.)';
}