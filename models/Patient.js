const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  condition: String,
  medicalHistory: String,
  treatmentPlan: String,
});

module.exports = mongoose.model('Patient', patientSchema);
