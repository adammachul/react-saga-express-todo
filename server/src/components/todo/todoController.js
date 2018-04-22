import { Router } from 'express';
import Todo from './todo';
import User from '../user/user';
import { verifyToken } from '../auth/authService';

const router = new Router();

// TODO: check router.all

router.all('/todo*', verifyToken);

router
    .post('/todos', (req, res) => {
        const userId = req.decodedPayload.id;

        Todo.find({ user: userId })
            .exec((error, todos) => {
                if (error) return res.json({ error: 'Couldnt find user'})

                return res.json(todos);
            });
    })
    .post('/todo', (req, res) => {
        const { text } = req.body;
        const userId = req.decodedPayload.id;

        User.findById(userId, (error, user) => {
            if (error) return res.json({ error: 'Couldnt find user'});

            const todo = new Todo({
                 user: user._id,
                 text,
                 is_completed: false,
            });

            todo.save((error) => {
                if (error) return res.json({ error: 'Couldnt add new todo'});

                user.todos.push(todo);
                user.save();
            
                return res.json({ todo });
            });
        });
    })
    .put('/todo', (req, res) => {
        const fieldsToUpdate = req.body.updated;

        const options = {
            new: true,
        }

        Todo.findByIdAndUpdate(req.body.id, fieldsToUpdate, options, (error, todo) => {
            if (error) return res.json({ error: 'Couldnt update todo' });
            if (!todo) return res.json({ error: 'Couldnt find todo' });

            return res.json({ todo });
        });
    })
    .delete('/todo', (req, res) => {
        Todo.findByIdAndRemove(req.body.id)
            .exec((error, todo) => {
                if (error) return res.json({ error: 'Couldnt delete todo' });
                if (!todo) return res.json({ error: 'Coudlnt find todo' });

                return res.json({ todo });
            });
    });

export default router;