import homePage from './homePage';

// nav bar
const createNav = (navItems) => {
    if(!navItems){
        navItems = [];
    }
    const navNode = document.createElement('nav');
    const ulNode = document.createElement('ul');
    for (let i = 0; i < navItems.length; i++) {
        const liNode = document.createElement('li');
        liNode.textContent = navItems[i];
        ulNode.appendChild(liNode);
    }
    navNode.appendChild(ulNode);
}

// expand todo

// Initialize page
const content = document.createElement('div');
content.id = 'content';
document.body.firstChild.before(content);
homePage();