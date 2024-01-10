// Jenkinsfile

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack locally
                    sh 'npm install webpack'

                    // Run npm install and npm run build
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
