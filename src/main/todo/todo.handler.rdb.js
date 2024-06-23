import { RdbmsConfig } from "../configure/rdbms.config.js";
import { TodoData } from "./todo.data.js";


const findAll = async () => {
    const query = "SELECT * FROM todo";
    const result = await RdbmsConfig.allQuery(query);
    console.log(result);
    return result;
};

const findById = async (id) => {
    const query = `SELECT * FROM todo WHERE id = ${id}`;
    return await RdbmsConfig.getQuery(query);
};

const add = async (todo) => {
    const query = `INSERT INTO todo(isDone, content)
          VALUES ('${todo.isDone}', '${todo.content}') RETURNING *`;
    return await RdbmsConfig.getQuery(query);
};

const update = async (id, todo) => {
    const query = `UPDATE todo SET isDone='${todo.isDone}'
                WHERE id = ${id} RETURNING *`;
    return await RdbmsConfig.getQuery(query);
};

const remove = async (id) => {
    const query = `DELETE FROM todo WHERE id = '${id}' RETURNING *`;
    return await RdbmsConfig.getQuery(query, [id]);
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
