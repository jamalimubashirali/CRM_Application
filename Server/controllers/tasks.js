import Tasks from "../models/Tasks.js";

const createTask = async (req , res) => {
    try {
        const {taskName , dueDate , assignedTo , completed} = req.body;
        const isMatch = await Tasks.findOne({taskName});
        if(isMatch) {
            res.status(400).json({
                msg : "The already exits with similar name"
            })
        }
        const task = new Tasks({
            taskName,
            completed,
            assignedTo, 
            dueDate
        });
        await Tasks.create(task);
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
    }
}

const getAllTask = async (req , res) => {
    try {
        const allTasks = await Tasks.find({});
        if(!allTasks) {
            res.status(404).json({
                msg : "No any task exits"
            });
        }
        res.status(200).json(allTasks);
    } catch (error) {
        console.error(error);
    }
}

const getTask = async (req, res) => {
    try {
        const {id : taskId} = req.params;
        const task = await Tasks.findOne({_id : taskId});
        if(!task){
            res.status(404).json({
                msg : `No task associtated to id ${taskId}`
            })
        }
        res.status(200).json({
            msg : 'Success',
            task
        })
    } catch (error) {
        console.error(error);
    }
}

const updateTask = async (req , res) => {
    try {
        const {id : taskId} = req.params;
        const updatedTaskData = req.body;
        const updatedtask = await Tasks.findOneAndUpdate({_id : taskId} , updatedTaskData , {
            new : true,
            runValidators : true
        });
        if(!updatedtask) {
            res.status(404).json({
                msg : `No found with id ${taskId}`
            })
        }
        res.status(200).json(updatedtask)
    } catch (error) {
        console.error(error);
    }
}

const deleteTask = async (req , res) => {
    try {
        const {id : taskId} = req.params;
        const deletedTask = await Tasks.findOneAndDelete({_id : taskId});
        if(!deletedTask) {
            res.status(404).json({
                msg : `No Task associted to id ${taskId}`,
            });
        }
        res.status(200).json({
            msg : `The task with the id ${taskId} was successfully deleted`,
        })
    } catch (error) {
        console.error(error);
    }
}

export {
    createTask, 
    getAllTask, 
    getTask, 
    updateTask, 
    deleteTask
}