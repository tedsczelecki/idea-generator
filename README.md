# Idea generator

A silly afternoon project where you can text message your idea to a Twilio number which gets saved in DynamoDB. Are there better solutions to save your ideas, for sure. But it has been a while since I last used the Twilio API, and I wanted to see how quickly I could set it up with a Lambda function.

## How to run

### Prerequisite
- Copy `env.sample.json` and rename it to `env.json`. (You will need to get a  Twilio api Account and Auth token from your Twilio account)
- Have you AWS cli profile setup so serverless can push the CloudFormation template

### Run it!

Not much to this. The Serverless framework will take care of all the infrastructure things for you. You just need to run:

```angular2html
yarn
yarn deploy
```

Once completed, you can view the API Gateway and DYnamoDB tables through the cli or in the AWS UI