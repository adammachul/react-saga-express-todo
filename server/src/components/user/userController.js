import { Router } from 'express';
import User from './user';

const router = new Router();

// TODO: add user update and delete
// TODO: remove /users
router.get('/users', (req, res) => {
    User.find()
    .populate('todos')
    .exec((error, users) => {
        if (error) return res.send(error);

        res.json({data: users});
    })
});

export default router;