#!/usr/bin/env bash

set -euo pipefail

IMAGE_NAME="seeed-design-system"
CONTAINER_NAME="seeed-design-system"
HOST_PORT="8010"

cd "$(dirname "$0")"

if docker ps -aq --filter "name=^/${CONTAINER_NAME}$" | grep -q .; then
  docker rm -f "$CONTAINER_NAME"
fi

docker build -t "$IMAGE_NAME" .
docker run --detach \
  --name "$CONTAINER_NAME" \
  --publish "${HOST_PORT}:80" \
  "$IMAGE_NAME"

echo "Running at http://localhost:${HOST_PORT}/design-system/"
