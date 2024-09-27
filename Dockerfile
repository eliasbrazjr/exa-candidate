FROM node:18-alpine

RUN mkdir -p /opt/app

WORKDIR /opt/app

COPY package.json yarn.lock .
RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start"]