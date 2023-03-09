const mongoose = require('mongoose');

const userShema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    }
});

const User = mongoose.model('User', userShema);

module.exports = User;
