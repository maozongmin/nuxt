FROM hub.oa.com/tgl-business/tnpm:v1.0.1 as builder

RUN mkdir /www
ADD ./ /www

WORKDIR /www

RUN  tnpm install && tnpm run build
