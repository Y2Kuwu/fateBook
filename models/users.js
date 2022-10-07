const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 6;


const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function (doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (error, hash) {
        if (error) return next(error);
        user.password = hash;
        return next();
    })
});

module.exports = mongoose.model('User', userSchema);

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema    //represents the structure of the doc
// const bcrypt = require('bcrypt');
// const SALTH_ROUNDS = 6;

// const userSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         unique: true,
//         trim: true,
//         lowercase: true,
//         required: true,
//     },
//     password:{
//         type: String,
//         trim: true, 
//         minLength: 3,
//         required: true,
//     }
// },
// {
//     timestamps: true,
//     toJSON: {  //removing sensitive information 
//         transform: function (doc, ret){
//             delete ret.password;
//             return ret;
//         }
//     }
// });
//         //pre is do before reading schema
// userSchema.pre('save', function(next)  //defines prehook for model, before data is saved do the following
// {
//     const user = this;  //creating variable for user
//     if (!user.isModified('password')) return next();
//     bcrypt.hash(user.password, SALTH_ROUNDS, function (error, hash){  //hashing and encrypting password salt rounds is the number of encryptions
//     if(error) return next(error);
//     user.password = hash;
//     return next();
//     })
// });

// module.exports = mongoose.model('User' , userSchema);