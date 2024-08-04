# viene con una carpeta interna llamada /app
# FROM node:19.2-alpine3.16

# cd /app
# WORKDIR /app

# source dest
#   source -> app.js package.json
#   dest -> ./, hace referencia al /app. Si no se pone el WORKDIR, se pone /app/
# COPY app.js package.json ./

# instalar las dependencias
# RUN npm install

# ejecuta la aplicacion
# CMD ["npm", "start"]



# FROM node:19.2-alpine3.16

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY app.js ./

# realizar testing
# RUN npm run test

# CMD ["npm", "start"]



# FROM node:19.2-alpine3.16

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# . -> copia todo lo que esta en la carpeta raiz
# COPY . ./

# realizar testing
# RUN npm run test

# eliminar dependencias innecesarias en produccion
# -r -> recursivo. si hay directorios dento de directorios... los eliminara
# && permite ejecutar varios comandos en una linea
# RUN rm -rf tests && rm -rf node_modules

# instalara solo las dependencias de produccion
# RUN npm install --prod

# este comando se usa cuando la imagen se monta en un contenedor
# CMD ["npm", "start"]



# FROM --platform=linux/arm64 node:19.2-alpine3.16

# WORKDIR /app

# COPY package.json ./

# RUN npm install

# COPY . ./

# RUN npm run test

# RUN rm -rf tests && rm -rf node_modules

# RUN npm install --prod

# CMD ["npm", "start"]



# It is not necessary to specify the $BUILDPLATFORM environment variable, since --platform specifies the architectures
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16
FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

WORKDIR /app

COPY package.json ./

RUN npm install

# . -> copia todo lo que esta en la carpeta raiz
COPY . ./

# realizar testing
RUN npm run test

# eliminar dependencias innecesarias en produccion
# -r -> recursivo. si hay directorios dento de directorios... los eliminara
# && permite ejecutar varios comandos en una linea
RUN rm -rf tests && rm -rf node_modules

# instalara solo las dependencias de produccion
RUN npm install --prod

# este comando se usa cuando la imagen se monta en un contenedor
CMD ["npm", "start"]