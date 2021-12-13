# Swarm Stacks and Production Grade Compose

- In 1.13 Docker adds a new layer of abstraction to Swarm called Stacks.
  Basically, it's compose files for production of Swarm. Stacks accept compose file. Inside compose file, there is what we call a declaretive definition, where we staging "this is the end of result to be". And it's the Swarm's job to figure all that out (Networks, Volume,...)
- Stacks manages all those object for us, it's doesn't need to go and first create networks, or volume,...
- New `deploy`. Can't do `build` because it's suppose there is no `build` in production.
- So now, compose will ignores `deploy`, Swarm ignores `build`
