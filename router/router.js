const express = require('express');
const Employee = require('../models/employee'); // Import the Employee model
const router = express.Router();

// Get, Post, Put, Delete
// Base path: http://localhost:3000/api/employees


router.post('/', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();
        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }   
})

router.get('/', async (req, res) => {
    try {
        const empList = await Employee.find();
        res.status(200).json(empList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: 'Id not found' });
    }

    const deleteUser = await Employee.findByIdAndDelete(id); // ✅ correct method

    if (deleteUser) {
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }

  } catch (error) {
    console.error("Delete error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});


router.put('/:id', async (req, res) => {
    try {
        let updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEmployee) { 
            return res.status(404).json({ message: 'Employee not found' });
        } else {
            res.status(200).json(updatedEmployee);
        }
    } catch {
        res.status(500).json({ message: error.message });
    }
})
module.exports = router;
// Define routes for employee operations