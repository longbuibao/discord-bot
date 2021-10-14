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