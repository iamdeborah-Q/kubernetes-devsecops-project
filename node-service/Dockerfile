

FROM node:22-alpine

WORKDIR /app

COPY package.json .
COPY server.js .

EXPOSE 5000

USER node

CMD ["node", "server.js"]
