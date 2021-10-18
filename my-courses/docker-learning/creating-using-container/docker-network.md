# Docker Defaults Networks

Each container connected to a private virtual network "bridge". Each virtual network go through a NAT firewall on host IP
Docker daemon configuring the host IP address so it can go through the internet
All containers on a virtual network can talk to each others with out -p

### Firewall on host operating system

It block all incoming traffic, everything is blocked by default, anything coming out from my container is going to be NATed by default
There is a concept of a virtual networks, by default you will see a network call bridge/docker0, when you start a docker container, we will call this container `C1`, that container will attach to `bridge/docker0` virtual network, and that virtual network is automatically attach to your network physic interface on you host so it can get out

> Launch `nginx` -p 3000:80. It told that "over here, on the interface host operating system, open the port 3000 and forward anything coming from that port 3000 through that virtual network to port 80 on `C1` container"

When create a `C2` the second container, It put on that same bridge network, and two container can talk freely back and forth on their exposed port, unless specific the `-p`, no traffic coming to my internal networks here is going to get to my containers
I can create more virtual networks and call them what ever you want

# Container vs VM

Container aren't mini VM - they are just processes - limit resources that they can access - exit when process stops
`ps aux`: linux command list all running processes

`docker start 'container name'` - start a docker container ran previously

There is no difference between `docker ps` and `docker container ls`

docker container stats <container name>

# Getting into the Shell

Go to inside container to mess around

`docker container run -it`

> t simulates a real terminal
> i interactive keep STDIN open even if not attached

`docker container run [OPTIONS] IMAGE [COMMAND] [ARG...]`

> [command] can be anything
> `docker container exec`
> Run a process inside docker container

# Start a nginx server

```
-- docker container run --publish 3000:80 nginx
	- look for image call nginx, pull down the lasted version from docker hub
	- start a new container from that image
	- open port 3000 on host pc
	- bind port 80 on nginx to pc host (forward through port 3000)
-- docker container ls
	- by default only show running container
	- `-a` to show all containers
	- each time run a docker run command, a container is created
-- docker container top
	- list processes running inside the container
-- docker container rm
	- remove container
```

# Docker Network DNS

Static IP's and using IP's for talking to containers is an anti-pattern. You should avoid it (Forget IP's)
There is a solution for this which is DNS naming
Docker use the container name as equivalent of a host name for containers talking to each other

# Automatic DNS resolution

Automatic DNS resolution for all containers on a virtual network using their container's name, so if you create another container on that virtual network, they will be able to find each others using their container name

```bash
docker container run -d \
--name nginx_alpine \
--network nginx-network \
nginx:alpine
```

-> Start a new docker container with virtual nginx-network attached to

```bash
docker container exec -it nginx_alpine ping new_nginx
```

-> Try to ping this new container without IP address

### Note: the default bridge network does not have the built in DNS server

# Docker Networks: CLI Management

`--network bridge`: default network that bridge through the NAT firewall to the physical
`--network host`: special network that skips the virtual networking of Docker and attach to the container directly to the host interface

`--network none`: having an interface on your computer that's not attach to anything
`network host` prevents the security boundaries of the interface, but in certain situation, it can improve the performance of high throughput networking

`network driver`: built in or 3rd extensions that give you virtual network features, simply driver that create a virtual network locally with its own subnet

#### `docker network ls`

> Show networks

#### `docker network inspect`

> Inspect a network

#### `docker network create --driver`

> Create a network

#### `docker network connect`

> Attach a network to container

#### `docker network disconnect`

> Detach a network from a container
