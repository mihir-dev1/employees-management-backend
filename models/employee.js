const mongoose = require("mongoose");

const Employee = mongoose.model("Employee", {
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    salary: { type: Number, required: true },
    dateOfJoining: { type: Date, default: Date.now }
});

module.exports = Employee;