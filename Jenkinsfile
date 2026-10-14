pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git branch:'main',url:'https://github.com/24104087-star/joke-api-afzal.git'
            }
        }
        stage('Install Dependencies and Test'){
            steps{
                bat 'npm install'
            }
        }
        stage('Build'){
            steps{
                bat 'npm run build'
            }
        }
    }
}