pipeline {
    agent any
    stages {
        stage('versions') {
            steps {
                sh 'npm --version'
                sh 'echo pwd: ${pwd()}'
            }
        }
        stage('install') {
            steps {
                sh 'yarn install'
            }
        }
        stage('unit tests') {
            steps {
                sh 'yarn test'
            }
        }
        stage('e2e tests') {
            steps {
                sh 'docker pull anthonye2007/docker-protractor'
                sh 'docker run \
                        --privileged \
                        --net=host \
                        --rm \
                        --name protractor-test \
                        -v ${pwd()}:/protractor/project \
                        anthonye2007/docker-protractor yarn e2e'
            }
        }
    }
}
