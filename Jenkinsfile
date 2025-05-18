pipeline {
  agent {
    docker {
        image 'mcr.microsoft.com/playwright:v1.51.1-jammy'
    }
  }                            

  tools {                              
    nodejs 'NodeJS_24'
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm ci'                    
        sh 'npm install -g allure-commandline'   
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
