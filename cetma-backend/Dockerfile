# Usa un'immagine base di Python
FROM python:3.10-slim

# Installa curl per health check
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Imposta la directory di lavoro
WORKDIR /app

# Copia i file necessari del progetto
COPY . /app

# Installa le dipendenze
RUN pip install --no-cache-dir rasa

# Crea la directory per i modelli se non esiste
RUN mkdir -p /app/models

# Espone la porta per le API REST
EXPOSE 5005

# Comando per eseguire il server Rasa con configurazione CORS completa
CMD ["rasa", "run", "--enable-api", "--cors", "*", "--debug", "--port", "5005", "--endpoints", "endpoints.yml"]