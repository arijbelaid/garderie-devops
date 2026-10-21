# Utilisation d'une image Node.js légère
FROM node:20-alpine

# Définition du répertoire de travail
WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances de production uniquement
RUN npm ci --omit=dev

# Copie du reste du code source
COPY . .

# Exposition du port (5000)
EXPOSE 5000

# Commande de démarrage
CMD ["node", "server.js"]
