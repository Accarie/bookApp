const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://davine:cyuzuzo@cluster0.582y51b.mongodb.net/?retryWrites=true&w=majority/patient', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
    .then(() => console.log('connected to mongodb successfully....'))
    .catch(err => console.log('failed to connect to mongodb', err));