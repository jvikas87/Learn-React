FROM nginx
WORKDIR /usr/share/nginx/html 
RUN rm -rf *
COPY build ./build
COPY nginx.conf /etc/nginx/