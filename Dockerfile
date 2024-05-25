FROM node:20.13-alpine
ENV PORT=6000
WORKDIR /
COPY package*.json ./package.json
RUN npm install
COPY . .
EXPOSE 6000
CMD [ "npm", "start"]

