import {clearChildrenById} from './elements.js'
import initializeTodos from './todo.js';

export default function(project) {
    clearChildrenById('content');

    const Todos = initializeTodos();
    const content = document.getElementById('content');
    const h1 = document.createElement('h1');
    h1.textContent = project.name;
    content.appendChild(h1);
    
    const ulNode = document.createElement('ul');
    for(let todo in project.todoList){
        const item = project.todoList[todo];
        const liNode = document.createElement('li');
        liNode.textContent = item.title;

        const editButton = document.createElement('button');
        editButton.textContent = "Edit";
        editButton.addEventListener('click', () => {
            createEditForm(item);
        });
        liNode.appendChild(editButton);

        const delButton = document.createElement('button');
        delButton.textContent = "Delete";
        delButton.addEventListener('click', () => {
            Todos.deleteTodo(item.id);
            // remove element
        })
        liNode.appendChild(delButton);

        ulNode.appendChild(liNode);        
    }
    content.appendChild(ulNode);

    const createEditForm = (todo) => {
        clearChildrenById('todoForm');
        let todoForm = document.getElementById('todoForm');
        if(!todoForm){
            todoForm = document.createElement('form');
            todoForm.id = 'todoForm';
        }

        const properties = ['title','description','dueDate','priority', 'checklist', 'notes'];
        properties.forEach((item) => {
            const input = document.createElement('input');
            if(item.includes("Date")){
                input.type = "Date";
            }
            const label = document.createElement('label');
            input.id = item;
            input.placeholder = item;
            input.value = todo[item];
            label.htmlFor = item;
            label.textContent = item;
            todoForm.appendChild(label);
            todoForm.appendChild(input);
        })
        const editButton = document.createElement('button');
        editButton.textContent = "Save";
        todoForm.appendChild(editButton);
        content.appendChild(todoForm);    
    }
    

}