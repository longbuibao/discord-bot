# Containers Everywhere = New Problems

One of the biggest promises of containers is that we can easily deploy our apps like we were a platform. How do we easily deploy and maintain our dozens, or hundreds, or even thousands of containers across many servers or instances?

> - How do we automate container life cycle?
> - How can we easily scale out/in/up/down?
> - How can we ensure out containers are re-created if they fail?
> - How can we replace containers without downtime
> - How can we control/track where containers get started?
> - How can we create cross-node virtual networks?
> - How can we ensure only trusted servers run our containers?
> - How can we store secrets, keys, passwords and get them to the right container (and only that container)?

# Swarm Mode: Built-in Orchestration

So this bring us to a major evolution in the scope of what Docker tries to solve.

> Swarm mode is a new feature in 2016 that brings together years of understanding the needs of containers and how to actually run them in live production.

Swarm is actually a server clustering solution that brings together different OS or hosts,... into a single manageable unit that you can then _orchestrate (orchestration is the automated configuration, coordination, and management of computer systems and software)_ the life cycle of your containers.

# Some basic concepts

- `Manager Nodes`: they actually have a database locally on them, known as _the Raft Database_. It store their configuration and gives them all the information they need to have to be the authority inside a Swarm.
- `Worker Nodes`: The concept of Swarm we have now managers and workers. Each worker would be a virtual machine, or physical host, running some distribution of Linux or Windows server.

> With this concept of a Swarm, and these managers, we now have new concepts of what our containers look like.
> And so with the `docker run` command, we could only deploy one container. It will just only create a container, `docker run` command didn't have concepts around how to scale out or scale up so we need a new command to deal with that -> `docker service` command

In a swarm, it replaces the `docker run` command, and allows us to add extra features to our containers.

> Tasks: A single service can have multiple tasks, and each of those tasks will launch a container
> There actually a totally new Swarm API here that has a bunch of background of services, such as `scheduler`, `dispatcher`, `allocator`,...that help make decisions around what the workers should be executing at any given moment and so the workers are constantly reporting in to the managers and asking for new work, the managers are constantly doling out new work and evaluating what you've told them to do.
