pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install and Build') {
            steps {
                script {
                    // Install dependencies and build server
                    sh 'cd server && npm install && npm run build'

                    // Install dependencies and build client
                    sh 'cd client && npm install && npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run tests if applicable
                    // sh 'cd server && npm test'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Deploy your application (e.g., to a server or cloud platform)
                    // This could involve copying files to a server, updating environment variables, etc.
                    // Ensure you have the necessary deployment scripts or commands.
                }
            }
        }
    }

    post {
        always {
            // Clean up, notify, or perform other actions after the pipeline completes
        }
    }
}
