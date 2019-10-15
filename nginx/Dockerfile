# Stage 1 - build frontend app
FROM node:10-alpine as build-deps

WORKDIR /code/

COPY frontend/package.json frontend/package-lock.json /code/
RUN yarn install

COPY frontend /code/
COPY .env /code/.env
RUN yarn build

# Stage 2 - nginx & frontend dist
FROM nginx:alpine

COPY nginx/prod.conf /etc/nginx/nginx.conf
COPY --from=build-deps /code/dist/ /dist/

CMD ["nginx", "-g", "daemon off;"]
