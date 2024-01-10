pipeline {
    agent any

    environment {
        MONGODB_URI = 'your_mongodb_uri'
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install server dependencies
                    sh 'cd server && npm install'

                    // Install client dependencies
                    sh 'cd client && npm install'
                }
            }
        }

        stage('Build and Test') {
            steps {
                script {
                    // Build server
                    sh 'cd server && npm run build'

                    // Build client
                    sh 'cd client && npm run build'

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
