# Usa una imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo
WORKDIR /app

# Copia el archivo package.json y package-lock.json
COPY package*.json /app/

# Instala las dependencias
RUN npm install

# Copia el código fuente al contenedor
COPY . /app/

# Expone el puerto donde Express escucha
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "index.js"]
