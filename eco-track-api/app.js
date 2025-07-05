const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const habitRoutes = require('./routes/habit.routes');
const userRoutes = require('./routes/user.routes'); // 👈 ¡ESTA LÍNEA FALTABA!

dotenv.config();
const app = express();

// Middleware para recibir JSON
app.use(express.json());

// Rutas
app.use('/api/habits', habitRoutes);
app.use('/api/users', userRoutes); // 👈 ¡Y ahora sí puedes usarla!

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ Conectado a MongoDB');
    app.listen(3000, () => {
      console.log('🚀 Servidor corriendo en puerto 3000');
    });
  })
  .catch(err => console.error('❌ Error de conexión', err));