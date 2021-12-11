sudo docker network create -d overlay frontend

sudo docker network create -d overlay backend

sudo docker service create --name vote -p 80:80 --network frontend --replicas 2 bretfisher/examplevotingapp_vote

sudo docker service ls

sudo docker service create --name redis --network frontend redis:3.2

sudo docker service create --name worker --network frontend --network backend bretfisher/examplevotingapp_worker

sudo docker volume create postgres

sudo docker service create --name db --mount type=volume,source=postgres,target=/var/lib/postgresql/data --network backend -e POSTGRES_HOST_AUTH_METHOD=trust postgres:9.4

curl localhost
