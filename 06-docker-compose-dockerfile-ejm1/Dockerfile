# estos comandos son para el desarrollo
FROM node:19-alpine3.15 as dev
WORKDIR /app
COPY package.json ./
RUN yarn install
CMD [ "yarn", "start:dev" ]

# estos comandos son para construir la imagen de produccion
FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile --network-timeout 600000


FROM node:19-alpine3.15 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
# RUN yarn test
RUN yarn build

FROM node:19-alpine3.15 as prod-deps
WORKDIR /app
COPY package.json ./
RUN yarn install --prod --frozen-lockfile --network-timeout 600000


FROM node:19-alpine3.15 as prod
EXPOSE 3000
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

CMD [ "node","dist/main.js"]