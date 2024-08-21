import express from 'express';

const port = process.env.PORT || 5000
// App Setup
const app = express();

app.get('/' , (req, res) =>{
    res.send("Everything is Working Well");
})

app.listen(port , console.log(`Server is Running on ${port}`));
