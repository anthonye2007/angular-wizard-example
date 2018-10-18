pipeline {
    agent { docker { image 'node:10' } }
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
    }
}
