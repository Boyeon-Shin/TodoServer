import express from 'express';
import {TodoData} from "./todo.data.js";
import {TodoHandlerRdb} from "./todo.handler.rdb.js";


const router = express.Router();

router.get('/', (req, res) => {
    res.json(TodoHandlerRdb.findAll());
});

router.post('/', (req, res) => {
    try {
        const data1 = req.body;
        console.log(data1);
        TodoHandlerRdb.add(data1);
        res.status(201).json(data1);
    }catch(err) {
        res.status(500).json(err);
    }
});

router.patch('/:id', (req,res) => {
    try {
        const id = req.params.id;
        const isDone = req.body.isDone;
        console.log(TodoData.todoData[id]);
        return TodoHandlerRdb.update(id, isDone);
    }catch(err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    return TodoHandlerRdb.remove(id);
})



export default router;
