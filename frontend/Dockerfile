# Étape 1 : Installation des dépendances
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Étape 2 : Build de l'application Next.js
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# On désactive la télémétrie Next.js pour le build
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Étape 3 : Image finale de production
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# On copie uniquement le nécessaire pour exécuter l'app
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000
CMD ["node", "server.js"]
