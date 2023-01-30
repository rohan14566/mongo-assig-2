const express=require("express")
const studentEndata=require("../controller/studentdata")
const router=express.Router();


router.get('/data',studentEndata.getStudentEnrolmentData)
router.get('/data1',studentEndata.getData1)
router.get('/data2',studentEndata.getData2)
router.get('/data3',studentEndata.getData3)
router.post('/data',studentEndata.saveStudentEnrolmentData)
router.put('/data',studentEndata.updateStudentEnrolmentData)
router.delete('/data',studentEndata.deleteStudentEnrolmentData)


module.exports=router;