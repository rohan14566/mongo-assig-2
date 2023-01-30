

const {insertToDB,insertManyToDB,findAllFromToDB,updateManyToDB,deleteToDB,find1ToDB,find2ToDB,find3ToDB,}=require('../database/connection')

// insert ops
const saveStudentEnrolmentData= async function(req,res){
    const studentData=req.body;
try {
    if(studentData && studentData.length>0){
      const  insertManyResponce=await insertManyToDB(studentData);
     return res.status(200).send({success:insertManyResponce.acknowledged})
    }
    const insertOneResponce=await insertToDB(studentData)
    return res.status(200).send({success:insertOneResponce.acknowledged})
 
    } 
catch (error) {
    console.log("error occured while saving the data=>",error);
     return res.status(500).send({message:"something went wrong while inserting data"})
  }
}
// read or query ops
const getStudentEnrolmentData= async function(req,res){
    const query=req.query;
     console.log("query",query)
try {
    const student=await findAllFromToDB(query);
    return res.status(200).send({studentData:student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}

//  salary more than 30000

const getData1= async function(req,res){
    const query={salary:{$gt:"30000"}};
    //  console.log("query",query)
try {
    const student=await find1ToDB(query);
    return res.status(200).send({studentData:student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}
//   experience more than 2 years.

const getData2= async function(req,res){
    const query={overallExp:{$gt:"1"}};
    //  console.log("query",query)
try {
    const student=await find2ToDB(query);
    return res.status(200).send({studentData:student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}

// graduated after 2015 and having experience more than 1 year

const getData3= async function(req,res){
    const query={yearGrad:{$gt:"2015"},overallExp:{$gt:"1"}};
    //  console.log("query",query)
try {
    const student=await find3ToDB(query);
    return res.status(200).send({studentData:student})
}
 catch (error) {
    console.log("error occured while fetching the data=>",error);
    return res.status(500).send({message:"something went wrong while fetching data"})
   }
}

// update ops
const updateStudentEnrolmentData= async function(req,res){
    const filter=req.body.filter
    const update=req.body.update
    const changeData={
        $set:update
    }
try {
    const student=await updateManyToDB(filter,changeData)
    return res.status(200).send({success:student.acknowledged})
} catch (error) {
    console.log("error occured while updating the data=>",error);
    return res.status(500).send({message:"something went wrong while updating data"})
}
}
// delete ops

const deleteStudentEnrolmentData= async function(req,res){
    const studentDeleteName=req.body.name;
    const filter={
        "name":studentDeleteName
    }
    
try {
    const DeleteResponce=await deleteDB(filter)
    return res.status(200).send({"DeleteDetails":DeleteResponce});
}
 catch (error) {
    console.log("error occured while delete the data=>",error);
    return res.status(500).send({message:"something went wrong while delete data"})
}
}
module.exports={saveStudentEnrolmentData,getStudentEnrolmentData,updateStudentEnrolmentData,deleteStudentEnrolmentData,getData1,getData2,getData3}