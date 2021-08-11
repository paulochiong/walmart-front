# base image
FROM ubuntu
RUN apt-get update
RUN apt-get install -y nodejs
RUN apt-get -y install npm
RUN apt-get install -y git
#RUN npm install -g @angular/cli
RUN git clone https://github.com/paulochiong/walmart-front.git
RUN cd walmart-front
RUN npm install
# start app
RUN ng serve --host 0.0.0.0