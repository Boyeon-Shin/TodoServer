import mysql from "mysql2/promise";
let connection;

try {
     connection = await mysql.createConnection({
        host: 'wisoft.io',
        user: 'boyeon',
        password: 'ds35303530',
        database: 'boyeon',
        port: 10009,
    });
} catch (err) {
    console.log(err);
}

const runCommand = async (query, params = []) => {
    try {
        const [rows, fields] = await connection.query(query, params);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

const allQuery = async (query) => {
    try {
        const [rows] = await connection.query(query);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

const getQuery = async (query, params = []) => {
    try {
        const [rows, fields] = await connection.query(query, params);
        return rows[0];
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    }
};

const close = async () => {
    if (connection) {
        connection.end();
        console.log('MySQL connection closed.');
    }
};

const createTable = () => {
    return `CREATE TABLE IF NOT EXISTS todo (
        id INT AUTO_INCREMENT PRIMARY KEY,
        isDone TINYINT NOT NULL,
        content text NOT NULL,
        createdDate DATETIME DEFAULT CURRENT_TIMESTAMP
    )`;
};

const insertDummy = () => {
    return `INSERT INTO todo (isDone, content)
        VALUES 
            (0, 'nodejs 공부하기'),
            (0, 'React 공부하기1'),
            (0, 'React 공부하기2'),
            (0, 'React 공부하기3'),
            (0, 'React 공부하기4')`;
};

const initialize = async () => {
    await runCommand(createTable());
    await runCommand(insertDummy());
};

export const RdbmsConfig = {
    close,
    initialize,
    getQuery,
    allQuery,
    runCommand,
};
