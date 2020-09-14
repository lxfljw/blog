FROM node:12.16
COPY . ./app
WORKDIR /app
# npm 换源
RUN npm install --registry=https://registry.npm.taobao.org
EXPOSE 3000
CMD npm start