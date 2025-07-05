const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    default: Date.now
  },
  completado: {
    type: Boolean,
    default: false
  }
});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;
