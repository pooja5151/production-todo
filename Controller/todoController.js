const Todo = require("../model/Todo")

exports.getTodos = async (req, res) => {
    try {
        const result = await Todo.find()
        res.status(200).json({ message: "fetch Success", result })
    } catch (error) {
        res.status(500).json({ message: error.message || "something wents  wrong" })
    }
}
exports.addTodos = async (req, res) => {
    try {
        await Todo.create(req.body)
        res.status(200).json({ message: "add todo Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something wents  wrong" })
    }
}
exports.updateTodos = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({ message: "update todo Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something wents  wrong" })
    }
}
exports.deleteTodos = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "delete todo Success" })
    } catch (error) {
        res.status(500).json({ message: error.message || "something wents  wrong" })
    }
}