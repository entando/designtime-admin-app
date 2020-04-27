## Guide for Running [`app-builder`](https://github.com/entando/app-builder) locally with [`entando-de-app`](https://github.com/entando/entando-de-app) and [`keycloak`](https://github.com/entando/entando-keycloak) authentication server

###  Run keycloak server:
- Clone: https://github.com/entando/entando-keycloak
- `cd entando-keycloak`
- `docker build -t entando/keycloak:latest .`
- `docker-compose up`
###  Setup keycloak realm and client
- Clone: https://github.com/entando/entando-keycloak-plugin
- Navigate to: http://localhost:8081/auth and log into keycloak admin console
- id/pass: `admin`/`qwe123`
- Top left corner click:  Add Realm
- Click import json file. Choose a file from cloned `entando-keycloak-plugin/keycloak/realm-export.json`
Now you have 2 clients that you will be using: 1) `entando-core` and 2) `entando-web`
### Configure clients
- Go to `Clients/entando-core` and make changes as described below:
- Put `*` in valid redirect URIs.
- Put `*` in web origin.
- Do the same for `Clients/entando-web`
- Now go to `Clients/entando-core` again, and go to a tab called `Service Accounts...`
- You should choose a client `realm-management` from dropdown and assign `realm-admin` to the right.
- Also, choose `entando-core` in dropdown and assign `superuser` to the right.
- Now restart the keycloak server.
### Setup entando-de-app
- Clone: https://github.com/entando/entando-de-app
- Open `pom.xml` file and edit lines `103`, `104` and `105`:
```
<keycloak.realm>entando-development</keycloak.realm>
<keycloak.client.id>entando-core</keycloak.client.id>
<keycloak.client.secret>YOUR SECRET HERE from KEYCLOAK</keycloak.client.secret>
```
As for secret you need to go to keycloak , then go to `Clients/entando-core` and click `Credentials` tab, there you will see a secret and put that secret into `pom.xml` . As for other two lines, you can keep them same as in the snippet above.
- Now run entando-de-app via running: `mvn clean package jetty:run -Pjetty-local -Pderby -Pkeycloak`
### Setup app-builder
- Clone app-builder from: https://github.com/entando/app-builder
- You must have node version `10.*`
- Run: `npm install`
- Create a file `.env.local`
- Put these lines into that file:
```
USE_MOCKS=false
DOMAIN=http://localhost:8080/entando-de-app
KEYCLOAK_ENABLED=true
```
- Navigate to: `localhost:3000` and try to log in with user(id/pass) `admin/adminadmin` or `admin/admin`