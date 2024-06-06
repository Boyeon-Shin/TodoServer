import { RdbmsConfig } from "../configure/rdbms.config.js";
import { TodoData } from "./todo.data.js";


const findAll = () => {
    const query = "SELECT * FROM todo";
    return RdbmsConfig.allQuery(query);
};

const findById = (id) => {
    const query = `SELECT * FROM todo WHERE id = ${id}`;
    return RdbmsConfig.getQuery(query);
};

const add = (todo) => {
    const query = `INSERT INTO todo(isDone, content)
          VALUES ('${todo.isDone}', '${todo.content}') RETURNING *`;
    return RdbmsConfig.getQuery(query);
};

const update = (id, todo) => {
    const query = `UPDATE todo SET isDone='${todo.isDone}'
                WHERE id = ${id} RETURNING *`;
    return RdbmsConfig.getQuery(query);
};

const remove = (id) => {
    const query = `DELETE FROM todo WHERE id = '${id}' RETURNING *`;
    return RdbmsConfig.getQuery(query);
};

const findIndexById = (id) => {
    return TodoData.todoData.findIndex((todo) => todo.id === id);
};

export const TodoHandlerRdb = {
    findAll,
    findById,
    add,
    update,
    remove,
};
