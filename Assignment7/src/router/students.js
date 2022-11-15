const {Student,Counter} = require("../model/student")
const bodyParser = require("body-parser")
const router = require("express").Router()
const {studentArray,lenghtList} = require("../InitialData")

router.use(bodyParser.json())
console.log(studentArray)


router.get("/", async(req,res)=>{
   let students =  await Student.find()
   let counter
    if(students.length === 0){
        students = await Student.create(studentArray)
       
    }
    
    try {

        res.json({
            status:"Success",
            students
        })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
})
router.get("/:id",async(req,res)=>{
    try {
        const student = await Student.find({_id:req.params.id})
        res.json({
            status:"Sucess",
            student
        })
    } catch (error) {
        res.status(400).json({message:error.message})
    
    }
})
router.use(bodyParser.urlencoded({ extended: true }))
router.post("/",async(req,res)=>{
    const name = req.body.name
    const currentClass = req.body.currentClass
    const division=req.body.division
    if(name && currentClass && division){
       
        try {
         
            const student = await Student.create(req.body)
           
            res.json({
                status:"Success",
                student
            })
        } catch (error) {
            res.status(400).json({message:error.message})
        }
    }
    else{
        res.status(400).json({
            status:"Failed to fetch",
            message:"Incomplete details"
        })
    }
    
})

router.put("/:id",async(req,res)=>{

   
   try {
    console.log(req.body)
    const student = await Student.findOneAndUpdate({_id:req.params.id},
    req.body
    )
    res.json({
        status:"Success",
        student
    })
   } catch (e) {
    res.status(400).json({message:e.message})
   }
})
router.delete("/:id",async(req,res)=>{
    try {
        console.log(req.params)
        const student = await Student.deleteOne({_id:req.params.id})
        res.json({
            status:"successfully Deleted record from database",
            student
        })
    } catch (error) {
        res.json({
            status:"Failed to Delete",
            message:"Give proper id to delete record"
        })
    }
})
module.exports = router