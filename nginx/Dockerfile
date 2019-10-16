# Stage 1 - build frontend app
FROM node:10-alpine as build-deps

WORKDIR /code/

COPY frontend/babel.config.js frontend/package.json frontend/vue.config.js frontend/yarn.lock /code/
RUN yarn install

COPY frontend /code/
RUN yarn build

# Stage 2 - nginx & frontend dist
FROM nginx:alpine

COPY nginx/prod.conf /etc/nginx/nginx.conf
COPY --from=build-deps /code/dist/ /dist/

CMD ["nginx", "-g", "daemon off;"]
