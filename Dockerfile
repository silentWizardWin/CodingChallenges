# use node 16 base image
FROM node:16

# set working directory
WORKDIR /app

# copy files into the container
COPY Challenge_2.js /app/Challenge_2.js
COPY output.txt /app/output.txt

# no dependencies to install
# use `RUN npm install` if any

# execute challenge script
CMD node Challenge_2.js > output

# expose output dir to the host machine
VOLUME ["/app/output"]
