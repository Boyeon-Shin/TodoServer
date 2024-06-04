import express from 'express';
import {TodoData} from "./todo.data.js";
import {TodoHandler} from "./todo.handler.js";
import req from "express/lib/request.js";

const router = express.Router();

router.get('/', (req, res) => {
    res.json(TodoHandler.findAll())
});

router.post('/', (req, res) => {
    const data1 = req.body;
    console.log(data1);
    res.status(201).json(data1);
    TodoHandler.add(data1);
});

router.patch('/:id', (req,res) => {
    const id = req.params.id;
    const isDone = req.body.isDone;
    console.log(TodoData.todoData[id]);
    return TodoHandler.update(id, isDone);
})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return TodoHandler.remove(id);
})




export default router;
