import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

var user = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    surname: String,
    todos: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Todo'
    }],
}, {
    timestamps: true
});

const saltRounds = 10;

user.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);

            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

user.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

const User = mongoose.model('User', user);

export default User;