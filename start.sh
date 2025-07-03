#!/bin/bash

echo "🚀 Avvio del sistema chatbot CETMA..."

# Ferma eventuali container esistenti
echo "🛑 Fermando container esistenti..."
docker-compose down

# Costruisci e avvia i servizi
echo "🔨 Costruendo e avviando i servizi..."
docker-compose up --build -d

# Attendi che i servizi siano pronti
echo "⏳ Attendendo che i servizi siano pronti..."
sleep 10

# Verifica lo stato dei servizi
echo "📊 Stato dei servizi:"
docker-compose ps

# Test di connettività
echo "🔍 Test di connettività..."
echo "Testing backend health..."
curl -f http://localhost:8099/ || echo "❌ Backend non raggiungibile"

echo "Testing frontend..."
curl -f http://localhost:3000/ || echo "❌ Frontend non raggiungibile"

echo "✅ Sistema avviato!"
echo "🌐 Frontend: http://localhost:3000"
echo "🔧 Backend: http://localhost:8099"
echo "📋 Logs backend: docker-compose logs rasa-backend"
echo "📋 Logs frontend: docker-compose logs frontend"