#!/usr/bin/env node
import { DomainName, EndpointType } from "@aws-cdk/aws-apigateway";
import { CfnOutput } from "@aws-cdk/core";
import cdk = require("@aws-cdk/core");
import {
  API_RESOURCE_URLS,
  CreateMahabaratAWSResources,
} from "./create-mahabharat-aws-resources";
import { Certificate } from "@aws-cdk/aws-certificatemanager";

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
  public domainName: DomainName;

  constructor(parent: cdk.App, name: string, props: cdk.StackProps) {
    super(parent, name, props);
    this.createDomainName();

    const mahabharatAWSResources = new CreateMahabaratAWSResources(
      this,
      "CreateMahabaratAWSResources",
      {},
      this.domainName
    );

    new CfnOutput(this, "Mahabharat character map AWS URL", {
      value: `https://${mahabharatAWSResources.mahabharatAPI.restApiId}.execute-api.${this.region}.amazonaws.com/${API_RESOURCE_URLS.MAHABARAT_CHARACTER_MAP}`,
    });

    new CfnOutput(this, "Mahabharat character map domain URL", {
      value: `https://api.vpurush.com/${API_RESOURCE_URLS.MAHABARAT_CHARACTER_MAP}`,
    });
  }

  private createDomainName() {
    const certificateArn =
      "arn:aws:acm:ap-southeast-2:175468255336:certificate/52ff0f9e-945f-4158-aac9-d6d140a87e3e";
    const certificate = Certificate.fromCertificateArn(
      this,
      "Certificate",
      certificateArn
    );

    this.domainName = new DomainName(this, "custom-domain-name-vpurush", {
      certificate,
      domainName: "api.vpurush.com",
      endpointType: EndpointType.REGIONAL,
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
