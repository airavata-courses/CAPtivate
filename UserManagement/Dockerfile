FROM java:8
FROM maven:alpine
WORKDIR /app
COPY . /app
RUN mvn -v
RUN mvn clean install -DskipTests
EXPOSE 8181
ADD ./target/UserManagement-0.0.1-SNAPSHOT.jar /jar/
ENTRYPOINT ["java","-jar","/jar/UserManagement-0.0.1-SNAPSHOT.jar"]