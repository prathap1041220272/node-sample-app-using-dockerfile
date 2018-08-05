# specify the node base image with your desired version node:<version>
FROM node:8

ENV NPM_CONFIG_LOGLEVEL info
ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
RUN npm install
RUN npm install express --save
# replace this with your application's default port
EXPOSE 8001
CMD ["node", "./index.js"]