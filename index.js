const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Node server is running...')
})
app.listen(port,() => {
    console.log(`server is running ${port}`);

})

const user = [
    
{ id:1,name:'akash' ,email:'akas@gmail.com'},
{ id:2,name:'batash' ,email:'akas@gmail.com'},
{ id:3,name:'tatash' ,email:'akas@gmail.com'},
{ id:4,name:'aash' ,email:'akas@gmail.com'}
]
// app.get('/users', (req, res) => {
//     if (req.query.name) {
//         const search = req.query.name
//         const filtered = user.filter(usr => usr.name.toLowerCase().indexOf(search) >= 0)
//         res.send(filtered)
//     }
//     else {
        
//         res.send(user)
//     }
// })


// password: tzaUhHayCs9MsjDf
// user: dbUser1



const uri = "mongodb+srv://dbUser1:tzaUhHayCs9MsjDf@cluster0.dnw37y6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
    try {

        const userCollection = client.db('simpleNode').collection('users');
        // const user = { name: "gias udidn", emai: "gs@gmail.com" }
        // const result = await userCollection.insertOne(user)
        // console.log(result);
        app.get('/users', async(req, res) => {
            const cursor = userCollection.find({});
            const user = await cursor.toArray();
            res.send(user)
       })

        app.post('/users', async (req, res) => {
            console.log('post api called')
            const users = req.body
            const result = await userCollection.insertOne(users)
            console.log(result)
            user._id = result.insertedId
            res.send(users)
        })
        
    }
    finally {
        
    }
     
}
 run().catch((e)=> console.log(e))