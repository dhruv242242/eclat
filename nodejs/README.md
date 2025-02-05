# EKS Cluster Setup with Helm and Nginx Ingress

## 1. Create an EKS Cluster
```sh
eksctl create cluster --name=eks-cluster --region=us-west-2
```

## 2. Create a Node Group
```sh
eksctl create nodegroup \
     --cluster=eks-cluster \
     --region=us-west-2 \
     --name=eks-nodegroup \
     --node-type=t3.medium \
     --nodes=1 \
     --nodes-min=1 \
     --nodes-max=2
```

## 3. Install Nginx Ingress Controller
```sh
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx \
--namespace ingress-nginx --create-namespace
```

## 4. Build and Push Docker Image
```sh
docker image build --platform=linux/amd64 -t dhruv242-node:latest .
docker tag dhruv242-node:latest dhruv242/nodeapp:latest
```

## 5. Create a Helm Chart
```sh
helm create helm-chart-node
```

## 6. Rollback a Helm Release
```sh
helm rollback <chart_name> <version>
```

## 7. Additional Notes
- Ensure `eksctl`, `kubectl`, `helm`, and `docker` are installed and configured properly.
- Replace `<chart_name>` and `<version>` with appropriate values when rolling back a Helm deployment.
- Make sure AWS CLI is configured to use the correct credentials for EKS operations.

## 8. Repository Structure
```
.
├── helm-chart-node
│   ├── charts/
│   ├── templates/
│   ├── values.yaml
│   ├── Chart.yaml
│   ├── README.md
├── Dockerfile
├── eks-cluster-setup.sh
└── README.md
```

## 9. Author
Dhruv

