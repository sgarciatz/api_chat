pipeline {
    agent any //{ docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'cd chat && npm install && cd ../'
                sh 'docker build ./chat -t istic/api_chat'
            }
        }
         stage('test') {
            steps {
                sh 'docker run --detach --name test_api_chat -p 20084:8084 istic/api_chat:latest'
                sh 'newman run chat_tests/chat_test.postman_collection.json'
                sh 'docker rm -f test_api_chat'
            }
        }
        stage('deploy') {
            steps {
                catchError {
                    sh 'docker rm -f api_chat'
                } 
                sh 'docker run --detach --name api_chat -p 8084:8084 istic/api_chat:latest'

            }
        }
    }
}