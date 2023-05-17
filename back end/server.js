/*
const express = require('express');
const cors = require('cors');
const {MongoClient,ServerApiVersion} = require('mongodb')
const app = express();

app.use(cors());
app.use(express.json());
*/
import express, { json, response } from 'express';
import { MongoClient, ServerApiVersion } from 'mongodb';
import cors from 'cors'



const PORT = 3001;
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const uri = 'mongodb+srv://arfieee28:admin@cluster0.tdqv4xz.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
await client.connect();



app.get('/db/find/:db/:collection/', async (req,res) =>{
    const {db,collection} = req.params;
    const result = await client.db(db).collection(collection)
        .find({}).toArray((err,result) =>{});
    res.send(result)
})

app.post('/db/save/BetTracker/BetTracker/', async (req,res) => {
    const doc = req.body;
    const result = await client.db('BetTracker').collection('BetTracker').insertOne(doc);
})




app.listen(PORT, () => {
    console.log(`Server Listening On Port:${PORT}`);
  })