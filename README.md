# 🪴 EcoTrack - bit-backend

**Nombre completo:** Angelica Bohorquez Rozo  
**Entrega 5:** BIT-BACKEND  

**Tecnologías usadas:** 
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman

---

## 📌 Descripción

**EcoTrack** es una API RESTful desarrollada con Node.js y Express, conectada a una base de datos MongoDB Atlas. Permite registrar hábitos sostenibles diarios como:

- Duchas de menos de 5 minutos 🚿  
- Uso de bicicleta o transporte público 🚲  
- Rechazo de bolsas plásticas ♻️  

Además, permite manejar usuarios y más adelante incluirá retos semanales y estadísticas.

---

## 📬 Pruebas con Postman

Es posible realizar pruebas con la API con Postman enviando solicitudes a los siguientes endpoints:

---

### ✨ Crear un hábito

**POST** `http://localhost:3000/api/habits`

#### Body (raw → JSON):

```json
{
  "nombre": "Ducha de 5 minutos",
  "descripcion": "Me duché rápido para ahorrar agua 💧"
}

Entre otros cumpliendo con el CRUD


---
Autor: Angélica Bohorquez Rozo