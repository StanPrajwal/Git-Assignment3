const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    name:{type:String,required:true},
    currentClass:{type:String,required:true},
    division:{type:String,required:true},
})

const counterSchema = new mongoose.Schema({
    counter:Number
})
const Counter = mongoose.model("Counter",counterSchema )
const Student = mongoose.model("students",studentSchema )
module.exports = {
    Student,Counter
}