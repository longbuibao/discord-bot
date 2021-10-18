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
