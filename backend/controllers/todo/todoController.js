
const Todo = require("../../models/todoModel")

const getTodos =  async(req, res) => {
    const allTodos = await Todo.find();
    res.json(allTodos)
};

// getTodo
const getTodo = async(req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo){
        res.status(404);
        throw new Error("Todo Not Found")
    }
    res.status(200).json(todo)
}

// CreateTodo

const createTodo = async (req, res) => {
   const { title, description, isCompleted} = req.body

   if(!title || !description ){
    res.status(400);
     throw new Error("please Fill All Details")
   }
   const newTodo = await Todo.create({
    title, 
    description,
   
   })

   if(newTodo){
    res.status(201).json(newTodo)
   }else{
    res.status(401)
    throw new Error(" Something went Wrong")
   }
}
// DeleteTodo
const deleteTodo = async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.status(200).json({
        msg: "Todo Deleted !!"
    })
}

// UpdateTodo
const updateTodo = async (req, res) => {
   const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true},)
if(!updateTodo){
    res.status(400)
    throw new Error('cannot update Todo')
}
res.status(200).json(updatedTodo)
}


module.exports = {
    getTodo,
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo
}