# Image layers

Images are designed using the union file system concept of making layers

Image is some big blob of data, that comes and goes in one huge chunk

when you use `docker pull`, there's something that you already have, like you've cached some part of it already, that all come down to the fact that images are designed using the union file system concept of making layers about the changes

```bash
docker image ls
```

> Show all the images

```bash
docker image history nginx:latest
```

> Show the history of image layers

Every image starts from very beginning with a blank layer and then every changes that happens after that on the file system, in the image, is another layer

# Container layer

[Apache image] and we decide to run a container on it, all Docker does is create a new read/write layer for that container on top of [Apache image]
Underneath, the storage driver that's used by Docker is actually layering, like a stack of pancakes all these changes on top of each other

A container is just a single read/write layer on top of image

# Tag name

The tag is not quite a version and it's not quite a branch, but it lot like Git tags
It's really just a pointer to a specific image commit and really could be anything, into that repos

```bash
docker image tag <IMAGE> <NEW TAG>
docker image push <USERNAME/IMAGE:TAG>
```
