const mongodb = require('mongodb').MongoClient
const dotevn = require('dotenv')
const express = require('express')

//config evn 
dotevn.config()
const url = "mongodb://redev:123456@192.168.99.100:27017"
let mongoDB;

function connection(callcack)
{
    mongodb.connect( url,(err,db)=>{
        mongoDB = db.db('redevdb')
        callcack()
    })
}

function get()
{
    return mongoDB
}

function close()
{
    mongoDB.close()
}

module.exports = {
    connection ,
    get,
    close
}
