FROM node:slim
WORKDIR /APP
COPY . /APP/
RUN  npm install
EXPOSE 3000
CMD node index.js
