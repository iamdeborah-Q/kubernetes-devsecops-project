
pipeline {
    agent any

    stages {
        stage('Unit Test - JUnit and JaCoCo') {
            steps {
                sh "mvn test"
            }
            post {
              always {
                junit 'target/surefire-reports/*.xml'
                jacoco execPattern: 'target/jacoco.exec'
              }
            }
        }

        stage('Build Artifact') {
            steps {
                sh "mvn clean package -DskipTests=true"
                archive 'target/*.jar'
            }
        }

        stage('Build Docker Image') {
            steps {
              sh 'printenv'
              sh 'docker build -t deborah/numeric-app:"$GIT_COMMIT" .'
              sh 'docker push deborah/numeric-app:"$GIT_COMMIT"'
            }
        }
    }
}
