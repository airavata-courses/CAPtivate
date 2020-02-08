### Software requirements
- [Java 8](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Tomcat Server v9.0](https://tomcat.apache.org/download-90.cgi) - Download the Windows Service Installer (32-bit/64-bit Windows Service Installer (pgp, sha512))
- [MySQL Server](https://dev.mysql.com/downloads/installer/)
- [Maven](https://maven.apache.org/download.cgi) - Download the binary zip archive file

### Steps
After you've downloaded and installed the above in your system, follow these steps to run the Spring Boot application
1. Unzip maven to a desired location in your computer.
2. Define MAVEN_HOME in your system variables. It would point to the location of the folder containining the Maven files unzipped in step 2. For eg. C:\User\apache-maven-3.6.3
3. Set path for Maven in your environment variables. It would contain the path upto the bin directory in the Maven folder (Step 2). For eg. C:\User\apache-maven-3.6.3\bin
4. Set JAVA_HOME variable (if not already present), to point to the JDK folder in the C:\Program Files\Java directory. Eg. C:\Program Files\Java\jdk1.8.0_241
5. Download and extract the code to your local machine. Open the folder UserManagement which must contain the pom.xml. Open a command prompt in this location.
6. Create a datbase by the name of 'ads' in your mysql instance by running the following command MySQL.

`create database ads`

7. Build the Spring Boot UserManagement Application with Maven, using either of the commands given below.

`mvn install / mvn clean install` 

or

`maven package`

8. Run the application using Maven with the following command.

`mvn spring-boot:run`
