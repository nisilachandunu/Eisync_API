const express = require('express')
const cors = require('cors')

const app = express()

var corOptions = {
    origin: "https://localhost:8081"
}


//middleware

app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

//testing api

app.get('/' , (req,res) => {
    res.json({message : 'hello from api'})
})

app.get('/users' , (req,res) => {
    console.log('get all users');
    try {
        const users =  userModel.find({}, (err, users) => {
            if (err) {
                res.status(500).json({ message: err });
            } else {
                res.status(200).json({ users });
            }
            
        });
        console.log(users);
    } catch (error) {
   
    }

})

//port

const PORT = process.env.PORT || 8080

//server
app.listen(PORT , () => {
    console.log(`server is running on port ${PORT}`)
})

