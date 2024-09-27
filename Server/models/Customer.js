import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        maxlength : [25 , `Name should not be longer than 15 characters`],
    },
    phone : {
        type : String,
        required : true,
    }, 
    email : {
        type : String, 
        required : true, 
        unique : true
    },
    company : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required :true,
    },
    industry : {
        type : String,
        required : true
    },
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updateAt : {
        type : Date,
        default : Date.now()
    }
})

export default mongoose.model("Customer" , customerSchema)