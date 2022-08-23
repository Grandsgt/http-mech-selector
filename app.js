const {buildDB}= require('./populate')
const express = require('express')
const app = express()
const port = 3000
const {BattleMechs} = require('./define')
const path = require('path');
//onst mechsRouter = require("./routes/mechs")
//const userRouter = require("./routes/user")

app.use(express.static('public'))
app.use(express.json())
//app.use('/user', userRouter)
//app.use('/mechs', mechsRouter);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

app.get('/', (req, res) => {
    res.send(express.static(path.join(__dirname, 'public')));
  });
  
  app.post('/', async (req, res) => {
    const { username, password } = req.body;
    console.log({ username, password })
    //await setTimeout(() => {
      if (username === 'testUser' && password === 'apple') {
        console.log('green')
        res.send({ loggedIn: true });
        return;
      } console.log('red')
      res.send({ loggedIn: false });
      return;
    //}, Math.random() * 4000);
  });

app.get('/mechs/:title', async (req, res) => {
})

app.get('/mechs', async (req, res) => {

})

app.post('/mechs', async (req, res) => {
    await BattleMechs.create(req.body)
    res.sendStatus(200)
})

app.put('/mechs', async (req, res) => {
    await BattleMechs.update({
        cost: req.body.cost
    },{
        where: {id:req.body.model}
    })
    res.sendStatus(200)
})

app.listen(port, () => {
    console.log (`server listening at http://localhost:${port}`)
})