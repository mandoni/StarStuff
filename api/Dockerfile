FROM node:alpine

WORKDIR /user/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "start", "bin www"]