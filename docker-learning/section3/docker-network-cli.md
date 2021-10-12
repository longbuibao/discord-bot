# Docker Networks: CLI Management

`--network bridge`: default network that bridge through the NAT firewall to the physical
`--network host`: special network that skips the virtual networking of Docker and attach to the container directly to the host interface

`--network none`: having an interface on your computer that's not attach to anything 
`network host` prevents the security boundaries of the interface, but in certain situation, it can improve the performance of high throughput networking  

`network driver`: built in or 3rd extensions that give you virtual network features, simply driver that create a virtual network locally with its own subnet

#### `docker network ls`
Show networks
#### `docker network inspect`
Inspect a network
#### `docker network create --driver`
Create a network
#### `docker network connect`
Attach a network to container
#### `docker network disconnect`
Detach a network from a container
