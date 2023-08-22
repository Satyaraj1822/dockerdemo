FROM node:slim
WORKDIR /APP
COPY . /APP/
RUN  npm install
EXPOSE 3001
CMD node index.js
