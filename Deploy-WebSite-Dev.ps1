$ACR="acrpaiablewebsite"
$ACR_SERVER="$ACR.azurecr.io"
$TAG="latest"

az acr login --name $ACR

docker build -f Dockerfile.web -t $ACR_SERVER/paiable-website:$TAG .
docker push $ACR_SERVER/paiable-website:$TAG