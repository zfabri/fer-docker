# the --platform refers to the architectures placed in the buildx command
# FROM --platform=$BUILDPLATFORM node:19.2-alpine3.16

# dependencias de desarrollo
FROM node:19.2-alpine3.16 as deps
# travel to the app
WORKDIR /app
COPY package.json ./
RUN npm install


# build y test
FROM node:19.2-alpine3.16 as builder
WORKDIR /app
# ./, refers to the /app. It was specified in the WORKDIR
# copy the node_modules from the previous step
COPY --from=deps /app/node_modules ./node_modules
# COPY ., copy the files I have locally, except what is in the .dockerignore
# COPY . ., (the second point) paste it in the image
COPY . .
RUN npm run test


# dependencias de produccion
FROM node:19.2-alpine3.16 as deps-prod
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# ejecutar el app
FROM node:19.2-alpine3.16 as runner
WORKDIR /app
COPY --from=deps-prod /app/node_modules ./node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD ["npm", "start"]