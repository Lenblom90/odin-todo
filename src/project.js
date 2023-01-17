const initializeProjects = () => {
    // projects
    const _projectList = [];
    
    const createProject = (name, todoList) => {
        if(!todoList){
            todoList = [];
        }
        const project = {name, todoList}

        if(_projectList[project.name]){
            throw console.error("This project already exists!");
        }
        
        _projectList[project.name] = todoList;
        
        return project;
    }

    const getProjects = () => {
        return _projectList;
    }

    const deleteProject = (name) => {
        delete _projectList[name];
    }

    return {
        createProject,
        getProjects,
        deleteProject,
    };    
}


export default initializeProjects;
