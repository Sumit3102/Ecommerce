const mongoose = require('mongoose')

const DB = 'mongodb+srv://sumit:SJjzS9TraCG1Q1a3@cluster0.dwynicj.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(DB, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
}).then(() =>{
    console.log('Database connected..')
})
//SJjzS9TraCG1Q1a3
//mongodb+srv://sumit:SJjzS9TraCG1Q1a3@cluster0.dwynicj.mongodb.net/?retryWrites=true&w=majority