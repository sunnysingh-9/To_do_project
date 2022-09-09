const messages = require('../utils/locale/en');
const repo = require('../db/repository/user_operation');
module.exports = {
    login(request, response){
        //console.log(request.body);
        const userObject = request.body;
        console.log('USER #### ', userObject);
        if(userObject.userid === userObject.password){
            response.json({message:"Welcome",userid:userObject.userid});
        }
        else{
            response.json({message:messages['invalid']});
        }
    },
    async register(request, response){
        const userObject = request.body;
        console.log(userObject);
        // Repository
        const result = await repo.add(userObject);
        //response.json(result);
        if(result && result.userid){
            response.json({message:'User Register SuccessFully '});
        }
        else{
            response.json({message:'Problem in User Register'});
        }

    },

    // changepassword(request, response){
    //     const userObject = request.body;
    //     console.log(userObject);
    //     repo.changePassword(userObject , response);
    // },

    // profile(request, response){
    //     const userObj = request.params; //?user=Amit (QueryString)
    //     console.log(userObj.id);

        // console.log(userObj);
        // response.json({message:'User Profile is ', userid: userObj.user});
}

    