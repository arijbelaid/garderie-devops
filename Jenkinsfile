pipeline {
    agent any

    environment {
        // ⚠️ REMPLACEZ PAR VOTRE NOM D'UTILISATEUR DOCKER HUB
        DOCKER_HUB_USER = 'arijbelaid' 
        FRONTEND_IMAGE = "arijbelaid/garderie-frontend:latest"
        BACKEND_IMAGE = "arijbelaid/garderie-backend:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                dir('frontend') { sh 'npm ci' }
                dir('backend') { sh 'npm ci' }
            }
        }

        stage('Test') {
            steps {
                // Exécute le test Jest. S'il échoue, le pipeline s'arrête (Question 12)
                dir('frontend') { sh 'npm test' }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh "docker build -t ${FRONTEND_IMAGE} ."
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh "docker build -t ${BACKEND_IMAGE} ."
                }
            }
        }

        stage('Push Frontend') {
            steps {
                // Utilise les identifiants Docker Hub (Question 10)
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh "docker push ${FRONTEND_IMAGE}"
                }
            }
        }

        stage('Push Backend') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                    sh "docker push ${BACKEND_IMAGE}"
                }
            }
        }
    }
}
