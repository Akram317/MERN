// Jenkinsfile

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack globally using sudo
                    sh 'sudo npm install -g webpack'

                    // Run npm install and npm run build
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
