import express from 'express';

const router = express.Router();

router.get('/greet', (req, res) => {
    res.json('Hello greet!');
});

export default router;
