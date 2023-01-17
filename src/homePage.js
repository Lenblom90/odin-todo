import { clearContent } from './elements.js';
import initializeProjects from './project.js';
import ProjectPage from './projectPage.js';

export default function() {
    clearContent();
    // overview
    const Projects = initializeProjects();
    const content = document.getElementById('content');

    Projects.createProject("My First project", ['1','2','3']);
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

