# nest-typescript-starter

Nest TypeScript starter repository
## System modules
System modules necessary for the operation of the entire application (examples: launching a NestJS application, launching microservices, etc.).

### DefaultNestApplicationInitializer
Default NestJS application initializer, no third party utilities required.

#### Static configuration
Static variables of primitive and complex types that are used in the module and can be used at the time of generating module metadata (import, controllers), values can be obtained from various sources, such as: process.env or the value of the consul key.

| Key    | Description | Constraints | Value |
| ------ | ----------- | ----------- | ----- |
|`cors`|CORS options from [CORS package](https://github.com/expressjs/cors#configuration-options)|**optional**|-|
|`bodyParser`|Whether to use underlying platform body parser.|**optional**|-|
|`httpsOptions`|Set of configurable HTTPS options|**optional**|-|
|`rawBody`|Whether to register the raw request body on the request. Use `req.rawBody`.|**optional**|-|


### DefaultNestApplicationListener
Default NestJS application listener, no third party utilities required.

#### Static environments
Static variables with primitive types used in the module and can be used at the time of generating module metadata (import, controllers), the values of which can be obtained from various sources, such as: process.env or consul key value.

| Key    | Description | Source | Constraints | Value |
| ------ | ----------- | ------ | ----------- | ----- |
|`port`|The port on which to run the server.|`obj['port']`, `process.env['PORT']`|**isNotEmpty** (port should not be empty)|```3000```|
|`hostname`|Hostname on which to listen for incoming packets.|`obj['hostname']`, `process.env['HOSTNAME']`|**optional**|-|

#### Static configuration
Static variables of primitive and complex types that are used in the module and can be used at the time of generating module metadata (import, controllers), values can be obtained from various sources, such as: process.env or the value of the consul key.

| Key    | Description | Constraints | Value |
| ------ | ----------- | ----------- | ----- |
|`mode`|Mode of start application: init - for run NestJS life cycle, listen -  for full start NestJS application|**optional**|-|
|`preListen`|Method for additional actions before listening|**optional**|-|
|`postListen`|Method for additional actions after listening|**optional**|-|

## Feature modules
Feature modules with business logic of the application.

### AppModule
Main app module

## Infrastructure modules
Infrastructure modules are needed to create configurations that launch various external services (examples: docker-compose file for raising a database, gitlab configuration for deploying an application).


### InfrastructureMarkdownReportGenerator
Infrastructure markdown report generator.

#### Shared providers
`DynamicNestModuleMetadataMarkdownReportGenerator`

#### Static configuration
Static variables of primitive and complex types that are used in the module and can be used at the time of generating module metadata (import, controllers), values can be obtained from various sources, such as: process.env or the value of the consul key.

| Key    | Description | Constraints | Value |
| ------ | ----------- | ----------- | ----- |
|`markdownFile`|Name of the markdown-file in which to save the infrastructure report|**optional**|```/home/endy/Projects/nestjs-mod-starter/INFRASTRUCTURE.MD```|
