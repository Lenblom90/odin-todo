const initializeTodos = () => {
    const _todoList = [];
    
    const createTodo = (title, description, dueDate, priority, notes, checklist) => {
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
        _todoList.push(todo);
        return todo;
    }

    const getTodoById = (id) => {
        return _todoList[_todoList.findIndex(todo => todo.id === id)];
    }

    const getTodoList = () => {
        return _todoList;
    }

    const deleteTodo = (id) => {
        return _todoList.splice(_todoList.findIndex(todo => todo.id === id),1);
    }

    const editTodo = (todo) => {
        let index = _todoList.findIndex(item => item.id == todo.id);
        if(index < 0){
            return false;
        } else {
            _todoList[index] = todo;
            return true;
        }
    }

    return {
        createTodo,
        getTodoById,
        getTodoList,
        deleteTodo,
        editTodo
    };    
}

export default initializeTodos;
