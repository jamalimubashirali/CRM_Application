import mongoose from 'mongoose';

const opportunitySchema = new mongoose.Schema({
  leadId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lead',
    required: true
  },
  opportunityName: {
    type: String,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  stage: {
    type: String,
    enum: ["Qualification", "Proposal", "Negotiation", "Closed"],
    required: true
  },
  expectedCloseDate: {
    type: Date,
    required: true
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

export default mongoose.model('Opportunity', opportunitySchema);
