import { clearChildrenById } from './elements.js';
import initializeProjects from './project.js';
import { createTodo } from './todo.js';
import ProjectPage from './projectPage.js';
import { format } from 'date-fns';
import './style.css';

export default function() {
    const Projects = initializeProjects();
    
    if(!window.localStorage.projects){
        let myFirstProject = Projects.createProject("My First project");
        createTodo(myFirstProject,"get groceries", "", format(new Date(),"yyyy-MM-dd"),"high","no notes");    
    }

    const createProjectList = () => {
        clearChildrenById('content');
        const content = document.getElementById('content');

        const h1 = document.createElement('h1')
        h1.textContent = "Taxe";
        content.append(h1);

        const addButton = document.createElement('button');
        addButton.textContent = "Add Project"
        addButton.addEventListener('click', () => {
            createEditForm();
        })
        content.appendChild(addButton);
    
        const ulNode = document.createElement('ul');
        let projects = Projects.getProjectList();    
        for(let item in projects){
            const liNode = document.createElement('li');
            const itemNode = document.createElement('div');
            itemNode.textContent = projects[item].name;
            const viewBtn = document.createElement('button');
            viewBtn.textContent = "View";
            viewBtn.addEventListener('click', (e) => {
                e.preventDefault();
                let projectName = e.target.previousSibling.textContent;
                let currentProject = Projects.getProjectByName(projectName);
                ProjectPage(currentProject);
            })
            itemNode.appendChild(viewBtn);
    
            const delBtn = document.createElement('button');
            delBtn.textContent = "Delete";
            delBtn.addEventListener('click', (e) => {
                const projectName = e.target.previousSibling.previousSibling.textContent;
                Projects.deleteProject(projectName);
                e.target.parentElement.parentElement.parentElement.removeChild(e.target.parentElement.parentElement);
            })
            itemNode.appendChild(delBtn);
            liNode.appendChild(itemNode);
            ulNode.appendChild(liNode)
        }
        content.appendChild(ulNode);
    }

    const createEditForm = () => {
        clearChildrenById('projectForm');
        let projectForm = document.getElementById('projectForm');
        if(!projectForm){
            projectForm = document.createElement('form');
            projectForm.id = 'projectForm';
        }
        const properties = ['name'];
        properties.forEach((item) => {
            const input = document.createElement('input');
            const label = document.createElement('label');
            input.id = item;
            input.placeholder = item;
            label.htmlFor = item;
            label.textContent = item;
            projectForm.appendChild(label);
            projectForm.appendChild(input);
        })
        const saveButton = document.createElement('button');
        saveButton.textContent = "Save";
        saveButton.addEventListener('click', (e) => {
            e.preventDefault();
            const name = e.target.form[0].value;
            Projects.createProject(name);
            createProjectList();
        });

        projectForm.appendChild(saveButton);
        content.appendChild(projectForm);    
    }

    createProjectList();
}

