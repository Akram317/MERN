pipeline {
    agent any

    environment {
        PATH = "/usr/local/bin:$PATH"
        NODE_HOME = "/path/to/your/nodejs/installation" // Set the path to your Node.js installation
        PATH = "$NODE_HOME/bin:$PATH"
    }

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack locally without sudo
                    sh 'npm install webpack --save-dev'

                    // Ensure execute permissions for webpack
                    sh 'chmod +x ./node_modules/.bin/webpack'

                    // Run npm install and npm run build
                    sh 'npm install'
                    
                    // Use npx to run webpack
                    sh 'npx webpack --config webpack.config.js'
                }
            }
        }
    }
}
