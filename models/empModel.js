// emp.model.js


var mongoose = require('mongoose');
// Schema Validation
var userSchema = mongoose.Schema({
    ID : {type: String},
    firstname: {type: String},
    lastname: String,
    call : String,
    email: {type: String ,trim: true}, //sper@gmail.com       trim = ตัดช่องว่าง
    pass : {type: String},
    age: {type: Number, min: 1, max: 100, default: 15},
    status: {type: String , enum: ["Admin", "Employee"]},
    created_date: {type:Date, default: Date.now}

},{
    collection: 'users'
});

var User = mongoose.model('User', userSchema);
module.exports = User;