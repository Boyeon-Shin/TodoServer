import sqlite3 from 'sqlite3';
import { promisify } from 'util';

let rdbms = new sqlite3.Database(':memory:');

const getQuery = (query) => promisify(rdbms.get.bind(rdbms))(query);
const allQuery = (query) => promisify(rdbms.all.bind(rdbms))(query);
const runCommand = (query) => promisify(rdbms.run.bind(rdbms))(query);
const close = () => promisify(rdbms.close.bind(rdbms));


const createTable = () => {
    return `CREATE TABLE IF NOT EXISTS todo (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        isDone BOOLEAN,
        content text,
        createdDate DATETIME DEFAULT CURRENT_TIMESTAMP
    )`;
};

const insertDummy = () => {
    return `INSERT INTO todo (isDone, content)
        VALUES (0, 'nodejs 공부하기'),
        (0, 'React 공부하기1'),
        (0, 'React 공부하기2'),
        (0, 'React 공부하기3'),
        (0, 'React 공부하기4')`;
};

const initialize = async () => {
    await runCommand(createTable());
    await  runCommand(insertDummy());
};

export const RdbmsConfig = {
    close,
    initialize,
    getQuery,
    allQuery,
    runCommand
};



