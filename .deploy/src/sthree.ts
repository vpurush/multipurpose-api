#!/usr/bin/env node
import cdk = require("@aws-cdk/core");
import { UploadLambdaToS3 } from "./upload-lambda-s3";

/**
 * This stack relies on getting the domain name from CDK context.
 * Use 'cdk synth -c domain=mystaticsite.com -c subdomain=www'
 * Or add the following to cdk.json:
 * {
 *   "context": {
 *     "domain": "mystaticsite.com",
 *     "subdomain": "www"
 *   }
 * }
 **/
class UploadLambdaStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    new UploadLambdaToS3(this, "UploadLambdaToS3", {});
  }
}

const app = new cdk.App();

new UploadLambdaStack(app, "UploadLambdaStack", {
  env: {
    // Stack must be in us-east-1, because the ACM certificate for a
    // global CloudFront distribution must be requested in us-east-1.
    region: "ap-southeast-2",
  },
});

app.synth();
