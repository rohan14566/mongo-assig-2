

const { query } = require('express');
const {MongoClient}=require('mongodb')
const url="mongodb://127.0.0.1:27017"

const client=new MongoClient(url);
const insertToDB=async(data)=>{
    try {
        await client.connect()
        console.log("connection to db is sucessfull")
        const database=client.db("Human_resource2");
        const collection=database.collection("employee2")
        const dbResponse=await collection.insertOne(data);
         await client.close();
        return dbResponse
    } catch (error) {
        return error.message
    }
}
const insertManyToDB= async(data)=>{
   try {
    await client.connect();
    console.log("connection to db is sucessfull")
    const database=client.db("Human_resource2");
    const collection=database.collection("employee2");
    const dbResponse=await collection.insertMany(data)
     await client.close();
    return dbResponse
   } catch (error) {
    return error.message
   }
   
}
const findAllFromToDB=async(query)=>{
    try {
       await client.connect();
       console.log("connection to db is sucessfull")
        const database=client.db("Human_resource2")
        const collection=database.collection("employee2")
        const dbResponse=await collection.findOne(query)
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message
    }
}
const find1ToDB=async(query)=>{
    try {
       await client.connect();
       console.log("connection to db is sucessfull")
        const database=client.db("Human_resource2")
        const collection=database.collection("employee2")
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message
    }
}
const find2ToDB=async(query)=>{
    try {
       await client.connect();
       console.log("connection to db is sucessfull")
        const database=client.db("Human_resource2")
        const collection=database.collection("employee2")
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message
    }
}
const find3ToDB=async(query)=>{
    try {
       await client.connect();
       console.log("connection to db is sucessfull")
        const database=client.db("Human_resource2")
        const collection=database.collection("employee2")
        const dbResponse=await collection.find(query).toArray();
        await client.close();
        return dbResponse;
    } catch (error) {
        return error.message
    }
}
const updateManyToDB=async(filter,changeData)=>{
    try {
        await client.connect()
        console.log("connection to db is sucessfull")
      const database=client.db("Human_resource2")
      const collection=database.collection("employee2");
      const dbResponse=await collection.updateMany(filter,changeData)
      await client.close()
      return dbResponse
    }
     catch (error) {
     return error.message
    }
}
const deleteManyToDB=async(filter)=>{
try {
    await client.connect()
    console.log("connection to db is sucessful")
    const database=client.db("human_resource2")
    const collection=database.collection("employee2")
    const dbResponse=await collection.deleteMany(filter);
    await client.close();
    return dbResponse
} catch (error) {
    return error.message
 }
}
module.exports={insertToDB,insertManyToDB,findAllFromToDB,updateManyToDB,deleteManyToDB,find1ToDB,find2ToDB,find3ToDB,deleteToDB}