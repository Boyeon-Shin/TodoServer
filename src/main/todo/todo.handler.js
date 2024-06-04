import {TodoData} from './todo.data.js';
import todoRouter from "./todo.router.js";

const findAll = () => {
    return TodoData.todoData;
}

const findById = (id) => {
    return TodoData.todoData.find((todo) => todo.id === id);
};

const add = (todo) => {
    const newTodo = {
        id: TodoData.todoData.length + 1,
        ...todo,
    }
    TodoData.todoData.push(newTodo);
    return newTodo;
};

const update = (id, isDone) => {
    const index = findIndexById(Number(id));
    if (index === -1) {
        return {};
    }
    //
    // const updated = {
    //     ...TodoData.todoData[index],
    //     isDone: isDone,
    // }

    // TodoData.todoData[index] = updated;

    TodoData.todoData[index].isDone = isDone;
    console.log(TodoData.todoData);
    // return update;
    };

 // };


const remove = (id) => {
    const index = findIndexById(Number(id));

    if (index === -1) {
        console.log("지우기 실패")
        return {};
    }

    const removed = TodoData.todoData[index];
    TodoData.todoData.splice(id, 1);
    return removed;
};

const findIndexById = (id) => {
    return TodoData.todoData.findIndex((todo) => todo.id === id);
};

export const TodoHandler = {
    findAll,
    findById,
    add,
    update,
    remove,
};


