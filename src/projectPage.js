import {clearContent} from './elements.js'

export default function(project) {
    clearContent();

    const content = document.getElementById('content');
    const h1 = document.createElement('h1');
    h1.textContent = project.name;
    content.appendChild(h1);
    
    const ulNode = document.createElement('ul');
    for(let todo in project.todoList){
        const liNode = document.createElement('li');
        liNode.textContent = todo;
        ulNode.appendChild(liNode);        
    }
    content.appendChild(ulNode)
    // project view
}