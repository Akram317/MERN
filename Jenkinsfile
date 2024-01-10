// Jenkinsfile

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack globally using sudo without password prompt
                    sh 'sudo /usr/bin/npm install -g webpack'

                    // Run npm install and npm run build
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
