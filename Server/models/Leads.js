import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  leadName: {
    type: String,
    required: true
  },
  email : {
    type : String,
    required : true,
  },
  source: {
    type: String,
    required: true
  },
  oppertunityName : {
    type : String,
    required : true
  },
  status: {
    type: String,
    enum: ["New", "In Progress", "Converted", "Lost"],
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Leads" , leadSchema);
