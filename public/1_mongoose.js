let mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/music',(err)=>{
    if(err){
        console.log('shibei');
    }
    else{'chenggong'}
})