const initializeProjects = () => {
    const _projectList = window.localStorage.projects ? JSON.parse(window.localStorage.projects) : [];

    const createProject = (name, todoList) => {
        if(_projectList.find(x => x.name === name)){
            console.warn("This project already exists!");
            return _projectList.find(x => x.name === name);
        }

        if(!todoList){
            todoList = [];
        }
        const project = {name, todoList};        
        _projectList.push(project);

        window.localStorage.setItem('projects',JSON.stringify(_projectList));
        return project;
    }

    const getProjectByName = (name) => {
        return _projectList.find(x => x.name === name);
    }

    const getProjectList = () => {
        return _projectList;
    }

    const editProject = (project) => {
        const index = _projectList.findIndex(x => x.name === project.name);
        _projectList[index].todoList = project.todoList;
        window.localStorage.setItem('projects',JSON.stringify(_projectList));
    }

    const deleteProject = (name) => {
        _projectList.splice(_projectList.findIndex(x => x.name === name),1);
        window.localStorage.setItem('projects',JSON.stringify(_projectList));
    }

    return {
        createProject,
        getProjectByName,
        getProjectList,
        editProject,
        deleteProject,
    };    
}


export default initializeProjects;
