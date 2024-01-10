pipeline {
    agent any
    
    tools {
        nodejs "your-nodejs-tool-label" // Specify the label or name of your Node.js tool installation
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack locally without sudo
                    sh 'npm install webpack --save-dev'

                    // Ensure execute permissions for webpack
                    sh 'chmod +x ./node_modules/.bin/webpack'

                    // Run npm install
                    sh 'npm install'

                    // Run webpack using npx
                    sh 'npx webpack --config webpack.config.js'
                }
            }
        }
    }
}
