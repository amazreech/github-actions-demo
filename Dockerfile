FROM node:18-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
COPY index.js ./
USER node
RUN npm install
COPY --chown=node:node . .
ENV NODE_ENV=dev

CMD [ "node", "index.js" ]
