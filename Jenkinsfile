pipeline{
    agent any
    
    parameters{
        string(name: 'IMAGE_TAG' , defaultValue: 'latest', description: 'Tage for Docker Image')
        booleanParam(name: 'PUSH_IMAGE', defaultValue: true , description: 'Deploy the Docker Image?')
    }

    stages {
        stage ('Check changes'){
            steps{
                git credentialsId: 'CI_CD_job', url: 'git@github.com:NUCES-ISB/assignment-no-2-MuhammadAbdullah950.git' , branch: 'main' 
                
            }
        }

        stage ('Build and Test'){
            steps{
                sh 'cd chatbot && npm install && npm run build && npm test'
            }
        }


        stage ('Create Docker Image'){
            steps{ 
                sh '''
                    cd chatbot
                    docker build -t chatbot:${IMAGE_TAG} .
                '''    
            }
        }

         stage ('Push Docker Image'){
            when {
                expression { params.PUSH_IMAGE }
            }

            steps{
                withCredentials([usernamePassword(credentialsId: 'dockerhub-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh '''
                        echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                        docker tag chatbot:${IMAGE_TAG} ${DOCKER_USERNAME}/chatbot:${IMAGE_TAG}
                        docker push ${DOCKER_USERNAME}/chatbot:${IMAGE_TAG}
                    '''
                }
            }
        }
    }

    post {
    success {
        slackSend(
            channel: '#chatbot-app',
            message: "CI and CD multipipeline job successfully built ",
            color: 'good'
        )
    }

    failure {
        slackSend(
            channel: '#chatbot-app',
            message: "CI and CD multipipeline job failed",
            color: 'danger'
        )
    }
}




    
}
