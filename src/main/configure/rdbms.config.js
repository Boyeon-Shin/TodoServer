import sqlite3 from 'sqlite3';
import { promisify } from 'util';

// let rdbms =  sqlite3;

let rdbms = new sqlite3.Database(':memory:');

// const open = () => {
//    rdbms =  new sqlite3Verbose.Database(":memory:");
// }

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

// const insertDummy = () => {
//     return `INSERT INTO todo (isDone, content)
//         VALUES ('false', 'nodejs 공부하기'),
//         ('false', 'React 공부하기1'),
//         ('false', 'React 공부하기2'),
//         ('false', 'React 공부하기3'),
//         ('false', 'React 공부하기4')`;
// };

const initialize = () => {
    runCommand(createTable());
    // runCommand(insertDummy());
};

// const runCommand =  (sql) => {
//     rdbms.run(sql, (err, rows) => {
//         if (err) {
//             console.error('run Error running query:', err.message);
//             return;
//         }
//         console.log('runCommand error Query result:', rows);
//     });
// };
//
// const getQuery = (sql) => {
//     rdbms.get(sql, (err, rows) => {
//         if(err) {
//             console.error('get Error running query:', err.message);
//             return;
//         }
//         console.log('Query result:', rows);
//     });
// };
//
// const allQuery = (sql) => {
//     return rdbms.all(sql, (err, rows) => {
//         if(err) {
//             console.error('all Error running query:', err.message);
//             return;
//         }
//         console.log('Query result:', rows);
//     });
// };

export const RdbmsConfig = {
    close,
    initialize,
    getQuery,
    allQuery,
    runCommand
};



