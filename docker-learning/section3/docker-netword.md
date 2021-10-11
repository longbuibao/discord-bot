# Docker Defaults Networks
Each container connected to a private virtual network "bridge". Each virtual network go through a NAT firewall on host IP
Docker daemon configuring the host IP address so it can go through the internet 
All containers on a virtual network can talk to each others with out -p

### Firewall on host operating system
It block all incoming traffic, everything is blocked by default, anything coming out from my container	is going to be NATed by default
There is a concept of a virtual networks, by default you will see a network call bridge/docker0, when you start a docker container, we will call this  container `C1`, that container will attach to `bridge/docker0` virtual network, and that virtual network is automatically attach to your network physic interface on you host so it can get out
> Launch `nginx` -p 3000:80. It told that "over here, on the interface host operating system, open the port 3000 and forward anything coming from that port 3000 through that virtual network to port 80 on `C1` container"  

When create a `C2` the second container, It put on that same bridge network, and two container can talk freely back and forth on their exposed port, unless specific the `-p`, no traffic coming to my internal networks here is going to get to my containers
I can create more virtual networks and call them what ever you want