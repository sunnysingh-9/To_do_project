const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const bcrypt = require('bcrypt');
const Schema = connection.Schema;
const userSchema = new Schema({
    'userid':{type:SchemaTypes.String, required:true, unique:true},
    'password':{type:SchemaTypes.String, required:true},
    'personalInfo':{},
    // 'new_password':{type:SchemaTypes.string , required:true},
    'email':{type:SchemaTypes.String , required:true},
    'phone':{type:SchemaTypes.Number , required:true},
    // 'name':{type:SchemaTypes.string , required:true}
});
// console.log('hello')
// userSchema.pre('save' , async function(next){
//     if(this.isModified(password)){
//         console.log("hello from inside")
//         this.password = bcrypt.hash(this.password , 12);
//     }
    
//     next();
    
    
// });

const UserModel = connection.model('users', userSchema);
module.exports = UserModel;