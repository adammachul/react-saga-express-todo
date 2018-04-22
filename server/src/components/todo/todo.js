import mongoose from 'mongoose';

const todo = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    is_completed: Boolean
}, {
    timestamps: true
});

const Todo = mongoose.model('Todo', todo);

export default Todo;