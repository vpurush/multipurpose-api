#!/usr/bin/env node
import { CfnOutput } from "@aws-cdk/core";
import cdk = require("@aws-cdk/core");
import {
  API_RESOURCE_URLS,
  CreateMahabaratAWSResources,
} from "./create-mahabharat-aws-resources";

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
class CreateMahabaratAWSResourcesStack extends cdk.Stack {
  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);

    const mahabharatAWSResources = new CreateMahabaratAWSResources(
      this,
      "CreateMahabaratAWSResources",
      {}
    );

    new CfnOutput(this, "Mahabharat character map URL", {
      value: `https://${mahabharatAWSResources.mahabharatAPI.restApiId}.execute-api.${this.region}.amazonaws.com/${API_RESOURCE_URLS.MAHABARAT_CHARACTER_MAP}`,
    });
  }
}

const app = new cdk.App();

new CreateMahabaratAWSResourcesStack(app, "CreateMahabaratAWSResourcesStack", {
  env: {
    // Stack must be in us-east-1, because the ACM certificate for a
    // global CloudFront distribution must be requested in us-east-1.
    region: "ap-southeast-2",
  },
});

app.synth();
