FROM alpine:3.6

EXPOSE 3031
# VOLUME /usr/src/app/public

RUN apk add --no-cache \
        uwsgi \
        uwsgi-python3 \
        python3 \
        git

RUN adduser -D -g '' uwsgi_user


WORKDIR /home/uwsgi_user

COPY requirements.txt requirements.txt

RUN pip3 install --no-cache-dir -r requirements.txt

ENV PYTHONPATH .

COPY . .

USER uwsgi_user

CMD [ "uwsgi", "--socket", "0.0.0.0:3031", \
               "--master", \
               "--plugins", "python3", \
               "--protocol", "uwsgi", \
               "--wsgi-file", "app.py",\
               "--callable", "app"]
