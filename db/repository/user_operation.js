const { response } = require('express');
// const { changepassword } = require('../../controllers/user');
const UserModel = require('../models/user');
module.exports = {
    add(userObject){
        var promise = UserModel.create(userObject);
        return promise;
    },

    find(userObject, response){
        UserModel.findOne({userid:userObject.userid, password:userObject.password},(err, doc)=>{
            if(err){
                response.json({message:'some DB Error'});

            }
            else if(doc){
                response.json({message:'welcome' + userObject.userid});

            }
            else{
                response.json({message:'invalid Userid or password'});

            }
        })
    },

    find(userObject , response){
        UserModel.findOneAndUpdate({userid:userObject.userid, password:userObject.password}, {password:userObject.new_password} , (err , res)=>{
            if(err){
                response.json({message:'some db error'});

            }
            else if(docs){
                response.json({message:'password successfully changed' });
                
            }
            else{
                response.json({message:'invalid userid and password'});
            }
        })
    },

    // find(userObject , response){
    //     UserModel.find({userid:userObject.userid} , (err , res)=>{
    //         if(err){
    //             response.json({message:'some db error'});

    //         }
    //         else if(docs){
    //             response.json({message:'Profile details' });
                
    //         }
    //         else{
    //             response.json({message:'invalid userid'});
    //         }
    //     })
    // }

}