const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema(
  {
    patientId: {
      // type: mongoose.Schema.Types.ObjectId,
      type:String,
      ref: 'Patient', 
      required: true,
    },
    doctorId: {
      // type: mongoose.Schema.Types.ObjectId,
      type:String,
      ref: 'User', 
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    reason: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      required: true,
    },
    additionalNotes: {
      type: String,
      default: '', 
    },
  },
  { timestamps: true } 
);

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;
