FROM node:15.14.0-buster-slim

WORKDIR /user/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]