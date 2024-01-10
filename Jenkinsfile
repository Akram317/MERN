pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Install webpack and npx globally without sudo
                    sh 'npm install -g webpack npx'

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
