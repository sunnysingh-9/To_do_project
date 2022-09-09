const mongoose = require('mongoose');
const URL = 'mongodb+srv://sunnysingh:sunny367367@cluster0.mhafvzk.mongodb.net/todo?retryWrites=true&w=majority';
mongoose.connect(URL,{
    useNewUrlparser:true,
    // useCreateIndex:true,
    useUnifiedTopology:true,
    // useFindAndModify:false,
    maxPoolSize:5



},(err)=>{
    if(err){
        console.log('DB Error ', err);
    }
    else{
        console.log('DB Connection Created...');
    }
});
module.exports = mongoose;