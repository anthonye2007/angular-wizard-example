#! /bin/sh

docker pull anthonye2007/docker-protractor

docker run -it \
 --privileged \
 --net=host \
 --rm \
 --name protractor-test \
 -v $(PWD):/protractor/project \
  anthonye2007/docker-protractor yarn e2e
