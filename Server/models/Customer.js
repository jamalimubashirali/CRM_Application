import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
    contactInfo : {
        phone : {
            type : String,
            required : true,
        }, 
        email : {
            type : String, 
            required : true, 
            unique : true
        }
    },
    company : {
        type : String,
        required : true
    },
    address : {
        street : {
            type : String,
            required : true,
        },
        city : {
            type : String, 
            required : true,
        },
        state : {
            type : String,
            required : true,
        },
        zipCode : {
            type : Number,
            required : true
        },
    },
    industry : {
        type : String,
        required : true
    },
    notes : {
        type : Array, 
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