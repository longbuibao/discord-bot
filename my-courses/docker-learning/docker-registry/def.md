# Run a Private Docker Registry

- Run the registry image
  - `docker container run -d -p 5000:5000 --name registry registry`
- Retag the image tag and push it to new registry
  - `docker tag hello-world 127.0.0.1:5000/hello-world`
  - `docker push 127.0.0.1:5000/hello-world`
- Remove that image from local cache anh pull it from new registry
  - `docker image rm hello-world`
  - `docker image rm 127.0.0.1:5000/hello-world`
  - `docker image pull 127.0.0.1:5000/hello-world`
- Re-create registry using a bind mount and see how it stores data
  - `docker container run -d -p 5000:5000 --name registry -v $(pwd)/registry-data:/var/lib/registry registry`
