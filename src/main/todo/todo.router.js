import express from 'express';
import {TodoData} from "./todo.data.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(TodoData.todoData)
});

router.post('/', (req, res) => {
    const data1 = req.body;
    console.log(data1)
    TodoData.todoData.push(data1);
    res.status(201).json(data1);
})

export default router;
