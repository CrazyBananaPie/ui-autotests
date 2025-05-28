pipeline {
  agent {
    label 'docker && playwright && tests'
  }                     

  tools {                              
    nodejs 'NodeJS_24'
    allureCommandline 'Allure_2.34'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'                    
      }
    }

    stage('Run tests') {
      steps {
        sh 'npx playwright test --reporter=allure-playwright'
      }
    }

    stage('Generate Allure HTML') {
      steps {
        sh 'allure generate ./allure-results -o ./allure-report --clean'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'allure-results/**, allure-report/**', fingerprint: true
      allure results: [[path: 'allure-results']]
    }
  }
}
