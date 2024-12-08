const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

//cuuatschool cuubeo123

app.use(express.json());
app.use(cors());

async function main() {
  await mongoose.connect('mongodb+srv://cuuatschool:cuubeo123@reasype.pps1l.mongodb.net/Reasype?retryWrites=true&w=majority&appName=Reasype');
}

main().then(() => console.log("MongoDb Connected")).catch(err => console.log(err));

//route

const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute")

app.use('/api', ItemRoutes)
app.use('/api/', CategoryRoutes)

app.get('/', (req, res) => {
  res.send('Reasype App Server is runing')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})