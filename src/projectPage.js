import { clearChildrenById } from './elements.js'
import { createTodo, deleteTodo, editTodo } from './todo.js';

export default function(project) {
    clearChildrenById('content');

    const showContent = () => {    
        const content = document.getElementById('content');
        const h1 = document.createElement('h1');
        h1.textContent = project.name;
        content.appendChild(h1);
        const addButton = document.createElement('button');
        addButton.textContent = "Add Todo"
        addButton.addEventListener('click', () => {
            createEditForm(project);
        })
        content.appendChild(addButton);
    
        const ulNode = document.createElement('ul');
        for(let todo in project.todoList){
            const item = project.todoList[todo];
            const liNode = document.createElement('li');
            liNode.textContent = item.title;
    
            const editButton = document.createElement('button');
            editButton.textContent = "Edit";
            editButton.addEventListener('click', () => {
                createEditForm(project, item);
            });
            liNode.appendChild(editButton);
    
            const delButton = document.createElement('button');
            delButton.textContent = "Delete";
            delButton.addEventListener('click', (e) => {
                deleteTodo(project, item.id);
                e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            })
            liNode.appendChild(delButton);
    
            ulNode.appendChild(liNode);        
        }
        content.appendChild(ulNode);
    }

    const createEditForm = (project, todo) => {
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
            if(todo){
                input.value = todo[item];
            }
            label.htmlFor = item;
            label.textContent = item;
            todoForm.appendChild(label);
            todoForm.appendChild(input);
        })
        const saveButton = document.createElement('button');
        saveButton.textContent = "Save";
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            if(!todo){
                const values = e.target.form;
                createTodo(project,values[0].value,values[1].value,values[3].value,values[4].value, values[5].value);
                
            } else {
                for (let i = 0; i < e.target.form.length; i++) {
                    const item = e.target.form[i];
                    todo[item.id] = item.value;
                }    
                project = editTodo(project, todo);            
            }
            clearChildrenById('todoForm')
        })
        todoForm.appendChild(saveButton);
        content.appendChild(todoForm);    
    }

    showContent();
}