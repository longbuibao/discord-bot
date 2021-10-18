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

# Persistent Data: Volumes

The first way you can tell a container that it needs to worry about a volumes is in a `Dockerfile` with the `VOLUME` command in `Dockerfile`

`VOLUME /var/lib/mysql`

> This is the default location of the MySQL database. This image is programmed in a way to tell Docker that when we start a new container from it, to actually create a new volume location and assign to this directory in the container. Which mean any files that we put in there (in the container), will outlive the container util we manually delete the volume

```json
"Volumes": {
	"/var/lib/mysql": {}
}
```

> This is the actually the running container getting its own unique location on the host, to store data, and then in the background, mapped or mounted to that location in the container, so the location container actually just thinks it's writing to `/var/lib/mysql` but the data is actually living in some location on host

```json
{
  "Source": "some/path/on/host",
  "Destionation": "var/lib/mysql"
}
```

# `docker volume create`

Command to create a Docker volume, required to do this before `docker run` to use custom drivers and labels.
This is the only way to actually specify a different driver (plug-in stuff, you can _plug_ this volume to any container)

# Persistent Data: Bind Mounting

- Mount a host file or directory to a container file or directory
- Basically just two locations pointing to the same physical location on disk
- Skips `UFS`, and host files overwrite any in container, you are not going to wipe out your host location when you delete the container
- Because bind mounts are usually host specific, they need specific data to be on the hard drive of the host in order to work, you CAN'T specify them in a `Dockerfile`, have to use it at the run time you run `docker container run` command

```bash
... run -v /Users/longbui/stuff:/path/container
```

> The left side of the colon `a:b` the path `a` to map into the container `b`
