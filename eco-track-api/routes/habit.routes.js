const express = require('express');
const router = express.Router();
const Habit = require('../models/habit.model');

// ✅ Crear un nuevo hábito
router.post('/', async (req, res) => {
  try {
    const nuevoHábito = new Habit(req.body);
    await nuevoHábito.save();
    res.status(201).json(nuevoHábito);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 📥 Obtener todos los hábitos
router.get('/', async (req, res) => {
  try {
    const habitos = await Habit.find();
    res.json(habitos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔍 Obtener un hábito por ID
router.get('/:id', async (req, res) => {
  try {
    const habito = await Habit.findById(req.params.id);
    if (!habito) return res.status(404).json({ error: 'Hábito no encontrado' });
    res.json(habito);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔁 Actualizar un hábito
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ error: 'Hábito no encontrado' });
    res.json(actualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ❌ Eliminar un hábito
router.delete('/:id', async (req, res) => {
  try {
    const eliminado = await Habit.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ error: 'Hábito no encontrado' });
    res.json({ mensaje: 'Hábito eliminado' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
