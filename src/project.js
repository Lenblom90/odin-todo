import initializeTodos from './todo.js';

const initializeProjects = () => {
    // projects
    const _projectList = [];
    
    const createProject = (name, todoList) => {
        if(!todoList){
            const Todos = initializeTodos();
            todoList = Todos.getTodoList();
            ;
        }
        const project = {name, todoList}

        if(_projectList[project.name]){
            throw console.error("This project already exists!");
        }
        
        _projectList[project.name] = todoList;
        
        return project;
    }

    const getProjectByName = (name) => {
        return {
            name,
            todoList: _projectList[name]
        };
    }

    const getProjectList = () => {
        return _projectList;
    }

    const editProject = (project) => {
        _projectList[project.name] = project.todoList;
    }

    const deleteProject = (name) => {
        delete _projectList[name];
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
