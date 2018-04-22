import { Router } from 'express';
import User from '../user/user';
import { generateToken } from './authService';

const router = new Router();

// TODO: stop adding user with the same email
// TODO: dont send password and unnecessary data with user

router.post('/register', (req, res) => {
    const user = new User(req.body.user);

    user.save((error) => {
        if (error) return res.json({ error: 'Error while adding new user'});

        const token = generateToken(user._id);

        res.json({ user, token });
    });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }, (error, user) => {
        if (error) res.json({ error: 'There was server problem when finding user' });

        if (!user) {
            res.json({ error: 'User not found' });
        } else {
            user.comparePassword(password, (error, isMatch) => {
                if (error) return res.json({ error: 'Couldnt compare password' });

                if (isMatch) {
                    const token = generateToken(user._id);
                    return res.json({ user, token });
                }

                res.json({ error: 'Invalid password'});
            });
        }
    });
});

export default router;