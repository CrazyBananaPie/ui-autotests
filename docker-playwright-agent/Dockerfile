# Start from Playwright’s image (browsers + deps baked in)
FROM mcr.microsoft.com/playwright:v1.52.0-noble

USER root

# Install Docker CLI and Git
RUN apt-get update \
  && apt-get install -y docker.io git openjdk-17-jre-headless \
  && rm -rf /var/lib/apt/lists/*

# Download the Jenkins inbound-agent jar
ARG AGENT_VER=4.12
ADD http://localhost:8080/jnlpJars/agent.jar /usr/local/bin/agent.jar

# Switch to non-root jenkins user
RUN useradd -ms /bin/bash jenkins \
  && chown jenkins:jenkins /usr/local/bin/agent.jar \
  && chmod 0555 /usr/local/bin/agent.jar

USER jenkins
WORKDIR /home/jenkins

# When this container starts, it will launch the JNLP agent
ENTRYPOINT ["java","-jar","/usr/local/bin/agent.jar"]
