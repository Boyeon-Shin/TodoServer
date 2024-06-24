import express from 'express';
import {TodoData} from "./todo.data.js";
import {TodoHandlerRdb} from "./todo.handler.rdb.js";


const router = express.Router();

router.get('/', async (req, res) => {
    const todo= await TodoHandlerRdb.findAll();
    // const todos = todo.map(todo => ({
    //     ...todo,
    //     isDone: !!todo.isDone // 0을 false로, 1을 true로 변환
    // }));
    res.json(todo);
});

router.post('/', async (req, res) => {
    try {
        const data1 = req.body;
        const data2 = {...data1, isDone: data1.isDone};
        console.log(data1);
        console.log(data2);
        await TodoHandlerRdb.add(data2);
        res.status(201).json(data2);
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
