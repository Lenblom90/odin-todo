import { clearChildrenById } from './elements.js';
import initializeProjects from './project.js';
import initializeTodos from './todo.js';
import ProjectPage from './projectPage.js';


export default function() {
    clearChildrenById('content');
    // overview
    const Projects = initializeProjects();
    const Todos = initializeTodos();
    Todos.createTodo('get groceries','', new Date().getDate(),"high","","");
    Todos.createTodo('make dinner','', new Date().getDate(),"medium","","");
    Todos.createTodo('work hard','', new Date().getDate(),"low","","");
    const content = document.getElementById('content');

    Projects.createProject("My First project", Todos.getTodoList());
    let projects = Projects.getProjectList();

    const ulNode = document.createElement('ul');
    for(let item in projects){
        const liNode = document.createElement('li');
        liNode.textContent = item;
        const viewBtn = document.createElement('button');
        viewBtn.textContent = "View";
        viewBtn.addEventListener('click', (e) => {
            e.preventDefault();
            let projectName = e.target.previousSibling.textContent;
            let currentProject = Projects.getProjectByName(projectName);
            ProjectPage(currentProject);
        })
        liNode.appendChild(viewBtn);
        ulNode.appendChild(liNode)
    }
    content.appendChild(ulNode);
}

