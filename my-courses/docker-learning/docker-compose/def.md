# Why?

So few software services are **truly** standalone. When you think about your containers, they're a single process solution, and we rarely use a single container to solve a problem or provide service. Our containers will often require other containers such as SQL or a key-value.

_So what if we had a way to connect all those pieces of our solution together, where we didn't need to remember all of the Docker run options?_

# docker-compose.yml

- Compose YAML format has it's own versions: 1, 2, 2.1, 3, 3.1
- YAML file can be used with `docker-compose` command for local docker automation or with `docker` directly in production with Swarm
- `docker-compose.yml` is default name, but any can be used with `docker-compose -f`

```yaml
version: '3.1' #if no version is specificed then v1 is assumed. Recommend v2 minium
services: # containers. same as `docker run`
	servicename: # a friendly name. This is also DNS name inside network
		image: # optional if you use build
		command: #optional if you want to replace the default CMD specified by the image
		enviroment: # same as -e in docker run
		volumes: #same as -v in docker run
	volumes: #same as docker volume create
	networks: #same as docker network create
	depends_on: # if you need to start this container, then you need to start others in `depends on as well`
```

# docker-compose CLI

- `docker-compose up`: Set up volumes/networks and start all containers
- `docker-compose down`: Stop all containers and remove cont/vol/net

# Adding image building to compose file

```yaml
version: '2'

# based off compose-sample-2, only we build nginx.conf into image
# uses sample HTML static site from https://startbootstrap.com/themes/agency/

services:
  proxy:
    build:
      context: .
      dockerfile: nginx.Dockerfile
    ports:
      - '80:80'
  web:
    image: httpd
    volumes:
      - ./html:/usr/local/apache2/htdocs/
```
