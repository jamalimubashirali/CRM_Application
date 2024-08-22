import mongoose from "mongoose";

const interactionSchema = new mongoose.Schema({
    customerID : {

    }, 
    interactionType : {
        type : String,
        enum : ["Email" , "Call" , "Meeting"],
        required : true
    }, 
    date : {
        type : Date,
        required : true,
        default : Date.now()
    },
    time : {
        type : Date,
        default : Date.now()
    },
    description : {
        type : String,
    },
    createdBy : {

    }, 
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        default : Date.now()
    }
})

export default mongoose.model("Interaction" , interactionSchema);

