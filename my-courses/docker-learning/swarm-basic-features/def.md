# Overlay networking driver

**This feature is for two hosts with different ip address, different network can talk to each other **

Basically creating a Swarm-wide bridge network

- Add the `--driver overlay` option when creating network where the containers across hosts on the same virtual network can access each other kind of like they're on a VLAN
- This is only for 'intra' (only inbound traffic) swarm communication
- Optional IPSec encryption on network creation
- Each service can be connected to multiple networks
- All IP address of all nodes can access to the node that running some service

# Swarm Routing Mesh

- Is a incoming or ingress network that distributes packets for our service to the tasks for that service
- Spans all nodes in Swarm
- Load balance Swarm Service across their Tasks
  **Two ways this works**
- From one container to container. If our back end system, like say the database, were increased to two replicas, the front end talking to the back end, wouldn't actually talking directly to their IP address. They will actually talk to something call **_VIP_** (virtual IP) that Swarm put to front of all services and this is a private IP inside the virtual networking of Swarm, and it ensures that the load is distributed among all the tasks for a service
yo
