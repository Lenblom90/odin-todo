import initializeProjects from './project.js';

export default function() {
    // overview
    const Projects = initializeProjects();
    const content = document.getElementById('content');

    Projects.createProject("My First project", ['1','2','3']);
    let projects = Projects.getProjectList();

    const ulNode = document.createElement('ul');
    for(let item in projects){
        const liNode = document.createElement('li');
        liNode.textContent = item;

        ulNode.appendChild(liNode)
    }

    content.appendChild(ulNode);
}

