import initializeProjects from "./project";

const createTodo = (project, title, description, dueDate, priority, notes, checklist) => {
    const id = crypto.randomUUID();
    const todo = {
        id,
        title, 
        description, 
        dueDate, 
        priority, 
        notes, 
        checklist
    };
    project.todoList.push(todo);
    const _Projects = initializeProjects();
    _Projects.editProject(project)
    
    return todo;
}


const deleteTodo = (project, id) => {
    project.todoList.splice(project.todoList.findIndex(todo => todo.id === id),1);
    const _Projects = initializeProjects();
    _Projects.editProject(project);
    return project;
}

const editTodo = (project, todo) => {
    let index = project.todoList.findIndex(item => item.id == todo.id);
    if(index < 0){
        return project;
    } else {
        project.todoList[index] = todo;
        const _Projects = initializeProjects();
        _Projects.editProject(project);
        return project;
    }
}

const getTodoById = (project, id) => {
    return project.todoList[project.todoList.findIndex(todo => todo.id === id)];
}

export {
    createTodo,
    deleteTodo,
    editTodo,
    getTodoById,
};    