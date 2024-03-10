## Problem Satement (Log Ingestor and Query Interface System)

## Objective

Develop a log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using full-text search or specific field filters.

Both the systems (the log ingestor and the query interface) can be built using any programming language.

The logs should be ingested (in the log ingestor) over HTTP, on port `3000`.
You can use Postman Agent.

```
### Sample Log Data Format:

The logs to be ingested will be sent in this format.

{
	"level": "error",
	"message": "Failed to connect to DB",
    "resourceId": "server-1234",
	"timestamp": "2023-09-15T08:00:00Z",
	"traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}

```
Example:
![logingesdemo](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/f2226ca6-fdb8-443a-847a-8b66ee09a25a)


## Requirements

The requirements for the log ingestor and the query interface are specified below.

### Log Ingestor:

- Develop a mechanism to ingest logs in the provided format.
- Ensure scalability to handle high volumes of logs efficiently.
- Mitigate potential bottlenecks such as I/O operations, database write speeds, etc.
- Make sure that the logs are ingested via an HTTP server, which runs on port `3000` by default.


### Query Interface:

- Offer a user interface (Web UI or CLI) for full-text search across logs.
- Include filters based on:
    - level
    - message
    - resourceId
    - timestamp
    - traceId
    - spanId
    - commit
    - metadata.parentResourceId
- Aim for efficient and quick search results.

## Advanced Features:

- Implement search within specific date ranges.
- Utilize regular expressions for search.
- Allow combining multiple filters.
- Provide real-time log ingestion and searching capabilities.
- Implement role-based access to the query interface.

## Sample Queries

The following are some sample queries that will be executed for validation.

- Find all logs with the level set to "error".
- Search for logs with the message containing the term "Failed to connect".
- Retrieve all logs related to resourceId "server-1234".
- Filter logs between the timestamp "2023-09-10T00:00:00Z" and "2023-09-15T23:59:59Z". 

## Technologies Used for LogIngestor and QueryInterface

- ClientSide: React.JS


- ServerSide: Node.JS , Express.JS , MongoDB(database)


In order to access it...
##  Developed a Robust User Authentication System

- Frontend Technologies used: React.JS

- Backend Technologies used: Spring Boot ,Spring Security with JWT ,Spring Data JPA, MYSQL(database),with Oauth2.


##  HomePage

![Screenshot (515)](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/912c6671-77fd-49e3-b420-12e6935b2d2e)

## Login Page
![Screenshot (518)](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/290936bb-58a4-4001-be5a-0fea10dc2e9c)

## SignUp Page

![Screenshot (519)](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/3d56a067-297b-4372-b05a-64fd25493269)

## Main Page

![Screenshot (520)](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/fd6b75e0-d64a-4b0a-827e-f6de11342b3c)



## - Here is Working Video of System ...

https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/099642ad-a604-4050-a603-302751564128



## Required Software

- Node Js must be installed before running project
- MongoDB compass is helpful for view database collection
- Intellij Ultimate IDE for running spring in backend

## Run in Local System

Clone the project

```bash
  git clone https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System.git
```

 Execute Instructions in Sequential Manner in Client folder

```bash
npm i
npm start
```

 Execute Instructions in Sequential Manner in parent folder - Query Interface Server (MongoDB as DB)

```bash
cd mainserver
npm i
npm start
```

## Setting up the Backend Server for UserAuth
- Here is pic of how login/signup credentials are getting stored in MySql

  ![Screenshot (516)](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/6ecfc371-74bc-466f-a218-63d42d86e64d)


+ **Create MySQL database**

	```bash
	mysql> create database spring_social
	```

 **Configure database username and password**

	```yml
	# spring-social/src/main/resources/application.yml
	spring:
	    datasource:
	        url: jdbc:mysql://localhost:3306/spring_social?useSSL=false
	        username: <YOUR_DB_USERNAME>
	        password: <YOUR_DB_PASSWORD>
	```

 **Specify OAuth2 Provider ClientId's and ClientSecrets**
	
	> This is optional if you're testing the app in localhost. A demo clientId and clientSecret is already specified.

	```yml
    security:
      oauth2:
        client:
          registration:
            google:
              clientId: <GOOGLE_CLIENT_ID>
              clientSecret: <GOOGLE_CLIENT_SECRET>
              redirectUriTemplate: "{baseUrl}/oauth2/callback/{registrationId}"
              scope:
                - email
                - profile
            github:
              clientId: <GITHUB_CLIENT_ID>
              clientSecret: <GITHUB_CLIENT_SECRET>
              redirectUriTemplate: "{baseUrl}/oauth2/callback/{registrationId}"
              scope:
                - user:email
                - read:user
        
	```

	*Please make sure that `http://localhost:8080/oauth2/callback/<provider>`* is added as an authorized redirect uri in the OAuth2 provider. For example, In your [Google API console](https://console.developers.google.com/projectselector/apis/credentials?pli=1), make sure that `http://localhost:8080/oauth2/callback/google` is added in the **Authorized redirect URIs**

	*Also, make sure that the above mentioned scopes are added in the OAuth2 provider console.*	For example, scope `email` and `profile` should be added in your Google project's OAuth2 consent screen.

 **Run springauthbackend**

	```bash
	mvn spring-boot:run
	```

 ![Screenshot (517)](https://github.com/Siva-Mula-03/LogIngestor-and-QueryInterface-System/assets/111627965/c2cc30f9-0151-4cbc-a6ba-857596813eb2)

 

For any Queries please reach out to me at sivamula9567@gmail.com
