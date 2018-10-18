pipeline {
    agent { docker { image 'node:10' } }
    stages {
        stage('versions') {
            steps {
                sh 'npm --version'
                sh 'echo $USER'
                sh 'lsb_release -a'
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
            }
        }
    }
}
