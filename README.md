Angular Example
===

This project is able to run unit and e2e tests on a Jenkins server.

For e2e tests, it uses a docker container from https://github.com/hortonworks/docker-protractor.
That had a slightly outdated version of Chrome, so I rebuilt it from the Dockerfile and published it as anthonye2007/docker-protractor.
