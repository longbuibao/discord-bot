# Secret Storage

- Easiest "secure" solution for storing secrets in Swarm.
- Supports generic strings or binary content up to 500kb in size.
- Doesn't require apps to be rewritten.
- Only stored on disk on Manager nodes.
- Default is Manegers and Workers "control plane" is TLS + Mutual Auth.
- Secrets are first stored in Swarm, then assigned to a Service(s).
- Only containers in assigned Service(s) can see them.

_For local development, if you are using a stack file that has secret assignments in it, it's will actually work in Docker Compose on local machine_
