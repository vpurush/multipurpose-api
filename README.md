# multipurpose-api

This is an API for personal projects

## Deployment

Navigate to .deploy folder

`docker build -t mapi-deploy .`

Start container that removes itself when exited
`docker run --rm -v C:\Users\vijay\.aws:/root/.aws --name mapi-deploy mapi-deploy`

Start container and attach to it (last command in docker-commands.sh needs to start a bash or sh)
`docker run --rm -it -v C:\Users\vijay\.aws:/root/.aws --name mapi-deploy mapi-deploy`

## Development

Navigate to .deploy folder

`npm run cdk-synth`

Navigate back to root folder

`npm run copy-node-modules`
`npm run build:move`

`sam local start-api`
