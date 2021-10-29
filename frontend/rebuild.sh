#!/bin/bash

source .env
sudo docker build -t longvb/bunrieu-fe-app .
sudo docker push longvb/bunrieu-fe-app
curl --request POST \
    --header 'Authorization: Bearer '$DIGITALOCEAN_TOKEN \
    --header 'Content-Type: application/json' \
    --url https://api.digitalocean.com/v2/apps/54778550-8a83-4d0e-92a1-28d594b8672a/deployments \
    --data '{
    "force_build": true
    }'