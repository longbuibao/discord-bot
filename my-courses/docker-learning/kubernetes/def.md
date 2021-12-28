# Basic Terms: System Parts

- _Kubernetes_: The whole orchestration system, either a single server or multi server setup with all the parts together that are there to run your apps. We abbrevitate that sometimes as K8s or Kube for short.
- _Kubectl_: CLI to configure K8s and manage apps, use to talk to the Kubernetes API.
- _Node_: Single server in the Kubernetes cluster.
- _Kubelet_: Kubernetes agent running on nodes to allow that node to talk back to the _Kubernetes_ master.
- _Control Plane_: Set of containers that manage the cluster. Includes API server, scheduler, controller manager, etcd, and more

# Kubernetes Container Abstractions

- _Pod_: one or more containers running together on one _Node_, basic unit of deployment. Containers are always in pods. We don't techically deploy containers directly inside of Kubernetes, we only deploy pods, and we use things on top of that know as controllers to control those pods.
- _Controller_: For creating/updating pods and other objects, this is an object that continually sits there and validates whether or not what's going on inside of Kubernetes is what you've asked it to do. Deployments are very similar to the way we did services in Swarm that control you pods.
- _Service_: Network endpoint to connect to a pod.
