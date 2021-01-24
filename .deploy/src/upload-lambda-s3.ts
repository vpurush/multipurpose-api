import * as s3 from "@aws-cdk/aws-s3";
import * as s3deploy from "@aws-cdk/aws-s3-deployment";
import { Construct } from "@aws-cdk/core";
import * as cdk from "@aws-cdk/core";

type UploadLambdaToS3Props = {};

export class UploadLambdaToS3 extends Construct {
  constructor(parent: Construct, name: string, props: UploadLambdaToS3Props) {
    super(parent, name);

    // Content bucket
    const siteBucket = new s3.Bucket(this, "multipurpose-api-bucket-creation", {
      bucketName: "multipurpose-api",
      // The default removal policy is RETAIN, which means that cdk destroy will not attempt to delete
      // the new bucket, and it will remain in your account until manually deleted. By setting the policy to
      // DESTROY, cdk destroy will attempt to delete the bucket, but will error if the bucket is not empty.
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
    });
    new cdk.CfnOutput(this, "Bucket", { value: siteBucket.bucketName });

    // Deploy site contents to S3 bucket
    new s3deploy.BucketDeployment(this, "multipurpose-api-bucket-deployment", {
      sources: [s3deploy.Source.asset("./multipurpose-api.tar.gz")],
      destinationBucket: siteBucket,
    });
  }
}
