import express from 'express';
import {TodoData} from "./todo.data.js";
import {TodoHandlerRdb} from "./todo.handler.rdb.js";


const router = express.Router();

router.get('/', async (req, res) => {
    const todo= await TodoHandlerRdb.findAll();
    res.json(todo);
});

router.post('/', async (req, res) => {
    try {
        const data1 = req.body;
        console.log(data1);
        await TodoHandlerRdb.add(data1);
        res.status(201).json(data1);
    }catch(err) {
        res.status(500).json(err);
    }
});

router.patch('/:id', (req,res) => {
    try {
        const id = req.params.id;
        const isDone = req.body.isDone;
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
