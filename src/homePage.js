import { clearChildrenById } from './elements.js';
import initializeProjects from './project.js';
import { createTodo } from './todo.js';
import ProjectPage from './projectPage.js';
import { format } from 'date-fns';


export default function() {
    clearChildrenById('content');

    const content = document.getElementById('content');

    const Projects = initializeProjects();
    
    if(!window.localStorage.projects){
        let myFirstProject = Projects.createProject("My First project");
        createTodo(myFirstProject,"get groceries", "", format(new Date(),"yyyy-MM-dd"),"high","no notes");    
    }

    let projects = Projects.getProjectList();
    const addButton = document.createElement('button');
    addButton.textContent = "Add Project"
    addButton.addEventListener('click', () => {
        createEditForm();
    })
    content.appendChild(addButton);

    const ulNode = document.createElement('ul');

    for(let item in projects){
        const liNode = document.createElement('li');
        liNode.textContent = projects[item].name;
        const viewBtn = document.createElement('button');
        viewBtn.textContent = "View";
        viewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let projectName = e.target.previousSibling.textContent;
            let currentProject = Projects.getProjectByName(projectName);
            ProjectPage(currentProject);
        })
        liNode.appendChild(viewBtn);

        const delBtn = document.createElement('button');
        delBtn.textContent = "Delete";
        delBtn.addEventListener('click', (e) => {
            const projectName = e.target.previousSibling.previousSibling.textContent;
            Projects.deleteProject(projectName);
            e.target.parentElement.parentElement.removeChild(e.target.parentElement)
        })
        liNode.appendChild(delBtn);
        
        ulNode.appendChild(liNode)
    }
    content.appendChild(ulNode);

    const createEditForm = (project) => {
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
            if(project){
                console.log(project);
                input.value = project[item];
            }
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
            if(project){
                project.name = name;
                Projects.editProject(project);
            } else {
                Projects.createProject(name);
            }
        })

        projectForm.appendChild(saveButton);
        content.appendChild(projectForm);    
    }
}

