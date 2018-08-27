FROM node
RUN mkdir /app
WORKDIR /app
ENV NODE_ENV=production
COPY  knexfile.js package-lock.json package.json src /app/
RUN npm i
CMD ["node", "src/server.js"]
