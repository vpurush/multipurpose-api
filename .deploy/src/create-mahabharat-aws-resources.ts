import { AssetCode, Function, Runtime, IFunction } from "@aws-cdk/aws-lambda";
import {
  DomainName,
  IApiKey,
  LambdaIntegration,
  LambdaRestApi,
  Period,
  RestApi,
} from "@aws-cdk/aws-apigateway";
import { Construct, Duration } from "@aws-cdk/core";
import {
  AttributeType,
  BillingMode,
  Table as DynamoDBTable,
} from "@aws-cdk/aws-dynamodb";

type CreateMahabaratAWSResourcesProps = {};

export const API_RESOURCE_URLS = {
  MAHABARAT_CHARACTER_MAP: "mahabharat-character-map",
};

export class CreateMahabaratAWSResources extends Construct {
  private mahabharatGetCharacterMapLambdaFunction: IFunction;
  private mahabharatCharactersTable: DynamoDBTable;
  private mahabharatRelationshipTable: DynamoDBTable;
  public mahabharatAPI: LambdaRestApi;
  private mahabharatAPIKey: IApiKey;

  constructor(
    parent: Construct,
    name: string,
    props: CreateMahabaratAWSResourcesProps,
    domainName: DomainName
  ) {
    super(parent, name);

    this.createMahabharatLambda();

    // DynamoDB is expensive, switching to storing data in JSON files
    // this.createMahabharatTables();

    this.createMahabharatAPI();

    domainName.addBasePathMapping(this.mahabharatAPI);
  }

  private createMahabharatTables() {
    this.mahabharatCharactersTable = new DynamoDBTable(
      this,
      "multipurpose-api-mahabharat-characters-table",
      {
        tableName: "mahabharat-characters",
        partitionKey: {
          name: "name",
          type: AttributeType.STRING,
        },
        sortKey: {
          name: "displayName",
          type: AttributeType.STRING,
        },
        billingMode: BillingMode.PROVISIONED,
        readCapacity: 25,
        writeCapacity: 25,
      }
    );
    this.mahabharatCharactersTable.grantReadData(
      this.mahabharatGetCharacterMapLambdaFunction
    );

    this.mahabharatRelationshipTable = new DynamoDBTable(
      this,
      "multipurpose-api-mahabharat-relationship-table",
      {
        tableName: "mahabharat-relationship",
        partitionKey: {
          name: "fromCharacter",
          type: AttributeType.STRING,
        },
        sortKey: {
          name: "toCharacter",
          type: AttributeType.STRING,
        },
        billingMode: BillingMode.PROVISIONED,
        readCapacity: 25,
        writeCapacity: 25,
      }
    );
    this.mahabharatRelationshipTable.grantReadData(
      this.mahabharatGetCharacterMapLambdaFunction
    );
  }

  private createMahabharatLambda() {
    this.mahabharatGetCharacterMapLambdaFunction = new Function(
      this,
      "multipurpose-api-lambda-mahabharat-getcharactermap",
      {
        functionName: "multipurpose-api-lambda-mahabharat-getcharactermap",
        handler: "lib/getCharacterMap.GetCharacterMap",
        runtime: Runtime.NODEJS_12_X,
        code: new AssetCode(`./multipurpose-api.zip`),
        memorySize: 128,
        timeout: Duration.seconds(5),
        environment: {},
      }
    );
  }

  private createMahabharatAPI() {
    this.mahabharatAPI = new RestApi(this, "mahabharat-api", {
      restApiName: "mahabharat-api",
    });

    this.mahabharatAPI.root
      .addResource(API_RESOURCE_URLS.MAHABARAT_CHARACTER_MAP, {
        defaultCorsPreflightOptions: {
          allowOrigins: ["*.vpurush.com"],
        },
      })
      .addMethod(
        "GET",
        new LambdaIntegration(this.mahabharatGetCharacterMapLambdaFunction)
      );

    // this.mahabharatAPIKey = this.mahabharatAPI.addApiKey("mahabharat-api-key", {
    //   apiKeyName: "mahabharat-api-key",
    //   value: "mahabharat-api-key-low-usage",
    // });
    // this.mahabharatAPI.addUsagePlan("mahabharat-usage-plan", {
    //   apiKey: this.mahabharatAPIKey,
    //   quota: {
    //     limit: 10000,
    //     period: Period.MONTH,
    //   },
    // });
  }
}
