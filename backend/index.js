const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const teacherRoute = require('./route/teacher')
const studentRoute = require('./route/student')
const db = require('./models')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());

app.use('/teacher',teacherRoute);
app.use('/student',studentRoute);


db.sequelize.sync().then(()=>{

    app.listen(8000,()=>{
        console.log("Server is running in port 8000");
    })

})



