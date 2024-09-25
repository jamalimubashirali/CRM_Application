import Leads from "../models/Leads.js";

const createLead = async (req, res) => {
  try {
    const {
      leadName,
      source,
      contactInfo,
      oppertunityName,
      status,
      assignedTo,
    } = req.body;
    const lead = new Leads({
      leadName,
      source,
      contactInfo,
      oppertunityName,
      status,
      assignedTo,
    });
    await Leads.create(lead);
    res.status(201).json({
      msg: "Lead Generated SuccessFully",
      lead,
    });
  } catch (error) {
    console.error(error);
  }
};

const getAllLeads = async (req, res) => {
  try {
    const allLeads = await Leads.find({});
    res.status(200).json({
      msg: "Request Successful",
      allLeads,
    });
  } catch (error) {
    console.error(error);
  }
};

const getLeadById = async (req, res) => {
  try {
    const { id: leadId } = req.params;
    const lead = await Leads.findById({ _id: leadId });
    if (!lead) {
      res.status(404).json({
        msg: "No lead Associated to this Id",
      });
    }
    res.status(200).json({
      msg: "Success",
      lead,
    });
  } catch (error) {
    console.error(error);
  }
};

const updateLead = async (req, res) => {
    try {
        const {id : leadId} = req.params;
        const updatedLeadData = req.body;
        const updatedLead = await Leads.findByIdAndUpdate({_id : leadId} , updatedLeadData , {
            new : true,
            runValidators : true
        });
        if (!updatedLead) {
            res.status(404).json({
                msg : `The lead with id ${leadId} does not exits`
            });
        }
        res.status(200).json({
            msg : `The data updatedSuccessfully`, 
            updatedLead
        })
    } catch (error) {
        console.error(error)
    }
};

const deleteLead = async (req, res) => {
  try {
    const { id: leadId } = req.params;
    const lead = await Leads.findByIdAndDelete({ _id: leadId });
    if(!lead) {
        res.status(404).json({
            msg : `The lead with id ${leadId} does not exits`
        });
    }
    res.status(200).json({
        msg : `The lead with id ${leadId} is deleted`
    })
  } catch (error) {
    console.error(error)
  }
};

export { createLead, getAllLeads, getLeadById, updateLead, deleteLead };
