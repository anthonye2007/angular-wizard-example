pipeline {
    agent any
    stages {
        stage('versions') {
            steps {
                sh 'npm --version'
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
