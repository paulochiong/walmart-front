# base image
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nodejs
RUN npm install -g @angular/cli
RUN git clone https://github.com/paulochiong/walmart-front.git
RUN cd walmart-front
# start app
RUN ng serve --host 0.0.0.0