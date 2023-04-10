#Build
docker_build('docker-react-playground','.',dockerfile='./Dockerfile')

k8s_yaml(kustomize('k8s/env/dev'))

#manage instance and port forwarding 3000
k8s_resource('docker-react-playground', port_forwards=['3030'])
