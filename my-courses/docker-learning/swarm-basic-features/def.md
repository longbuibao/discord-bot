# Overlay networking driver

Basically creating a Swarm-wide bridge network

- Add the `--driver overlay` option when creating network where the containers across hosts on the same virtual network can access each other kind of like they're on a VLAN
- This is only for 'intra' (only inbound traffic) swarm communication
- Optional IPSec encryption on network creation
- Each service can be connected to multiple networks
- All IP address of all nodes can access to the node that running some service
