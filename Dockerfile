# Usar la imagen de Playwright con navegadores preinstalados
FROM mcr.microsoft.com/playwright:v1.50.1-noble

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# # Exponer el puerto 3000
# EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "index.js"]