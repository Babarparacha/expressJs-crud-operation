import studentModel from "../models/student.js";
//  making a controller 
 class studentController{
    static createDoc=async(req,res)=>{
        // res.send('data created')
        try{
   const {name,age}=req.body
   const doc=new studentModel({
    name:name, age:age
   })
   const result=await doc.save()
   res.status(201).send(result)
        }
        catch(error){
console.log(error)
        }
        
    }
    static getAllDoc=async (req,res)=>{
        // res.send('all Document')
        try{
            const result=await studentModel.find()
            res.send(result)
        }
        catch(error){
       console.log(error)
        }
    }
    static getSingleDocById=async(req,res)=>{
        // res.send('get single Document  by id')
        try{
            const result=await studentModel.findById(req.params.id)
            res.send(result)
        }
        catch(error){
       console.log(error)
        }
    }
    static updateDocById=async(req,res)=>{
        // res.send('update Document  by id')
        try{
const result=await studentModel.findByIdAndUpdate(req.params.id,req.body)
res.send(result)
        }
        catch(error){
            console.log(error)
        }
    }
    static deleteDocById=async(req,res)=>{
        // res.send('delete Document  by id')
        try{
const result=await studentModel.findByIdAndDelete(req.params.id)
res.status(204).send(result)
        }
    catch(error){
        console.log(error)
    }
    }
 }

 export default studentController