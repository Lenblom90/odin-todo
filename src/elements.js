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
return navNode;
}

const clearContent = () => {
    let contentNode = document.getElementById('content');
    if(contentNode){
        while(contentNode.firstChild){
            contentNode.removeChild(contentNode.firstChild);
        }
    }     
}

export {
        createNav,
        clearContent
    }