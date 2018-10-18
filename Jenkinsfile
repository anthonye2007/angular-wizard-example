pipeline {
    agent { docker { image 'node:6.3' } }
    stages {
        stage('versions') {
            steps {
                sh 'npm --version'
            }
        }
    }
}
