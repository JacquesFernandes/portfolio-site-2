FROM docker.io/library/node:18

USER node

WORKDIR /home/node/app

COPY --chown=node ./package.json ./package.json

RUN echo "NODE VERSION $(node -v)"

RUN npm install

COPY --chown=node ./ ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]