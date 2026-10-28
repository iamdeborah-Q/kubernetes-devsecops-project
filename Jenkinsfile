
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

        
        stage('Docker Build and Push') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                    sh 'docker build -t devsecops2027/numeric-app:"$GIT_COMMIT" .'
                    sh 'docker push devsecops2027/numeric-app:"$GIT_COMMIT"'
                }
            }
        }
        
      stage('Kubernetes Deployment - DEV') {
          steps {
              sh "sed -i 's#replace#devsecops2027/numeric-app:${GIT_COMMIT}#g' k8s_deployment_service.yaml"
              sh "kubectl apply -f k8s_deployment_service.yaml"
          }
      }
    }
}
