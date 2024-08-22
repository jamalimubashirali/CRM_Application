import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  leadName: {
    type: String,
    required: true
  },
  contactInfo: {
    phone: String,
    email: String
  },
  source: {
    type: String,
    required: true
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
