# Container Lifetime & Persistent Data

- Containers are usually immutable and ephemeral

  > Fancy buzzwords for `unchanging` and `temporary`, but the idea here is we can just throw away a container and create a new one from an image.

- "immutable infrastructure": only re-deploy containers, never change
  > This is not an actual limitation of containers, but more of a design goal, this is the idea of `immutable infrastructure` where we don't change things once they're running. If a config change needs to happen, or maybe the container version upgrade needs to happen, then we re-deploy whole new container.

So, what about the unique data that your app will produce? Those database, or a key-value stores or anything that your app spit out into a file.
Ideally, the containers shouldn't contain you unique data mixed in with the application binaries. This is known as `separation of concerns` and Docker actually gives us a big benefit here. We can update our application by recreating a new container, with an updated version of our app, and our data is still where it needs to be and was preserved for us while our container was recycled

**Volumes** and **Bind Mounts**

# Volumes

Docker Volumes are a configuration option for a container that creates a special location outside of that container's union file system to store unique data. This preserves it across container removals and allows us to attach it to whatever container we want and the container just see it as a file path

# Bind mounts

Simply a sharing or mounting a host directory, or file, into a container and again, it just look like a local file path, or a directory path, to the container.
