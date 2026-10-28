
pipeline {
    agent any

    stages {
        stage('Unit Test') {
            steps {
                sh "mvn clean test"
            }
        }

        stage('Build Artifact') {
            steps {
                sh "mvn package -DskipTests=true"
                archive 'target/*.jar'
            }
        }
    }
}
