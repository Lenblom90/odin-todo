const createNav = (navItems, navFunctions) => {
if(!navItems){
    navItems = [];
}
const navNode = document.createElement('nav');
const ulNode = document.createElement('ul');
for (let i = 0; i < navItems.length; i++) {
    const liNode = document.createElement('li');
    liNode.textContent = navItems[i];
    liNode.addEventListener('click', navFunctions[i]);
    ulNode.appendChild(liNode);
}
navNode.appendChild(ulNode);
document.body.firstChild.before(navNode);
}

const clearChildrenById = (id) => {
    let parentNode = document.getElementById(id);
    if(parentNode){
        while(parentNode.firstChild){
            parentNode.removeChild(parentNode.firstChild);
        }
    }     
}

export {
        createNav,
        clearChildrenById
    }