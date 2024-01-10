// Jenkinsfile

pipeline {
    agent any

    environment {
        PATH = "/usr/bin:$PATH"
        NODE_HOME = "/path/to/your/nodejs/installation" // Set the path to your Node.js installation
        PATH = "$NODE_HOME/bin:$PATH"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack locally without sudo
                    sh 'npm install webpack --save-dev'

                    // Run npm install and npm run build
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }
    }
}
