import AWS from "aws-sdk";
import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
  Callback,
} from "aws-lambda";
import { Character } from "../data/mahabharat/characters";
import { Relationship } from "../data/mahabharat/relationship";

const docClient = new AWS.DynamoDB.DocumentClient();

export type Handler<TEvent = any, TResult = any> = (
  event: TEvent,
  context: Context,
  callback: Callback<TResult>
) => void | Promise<TResult>;

export const GetCharacterMap = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("start");

  return new Promise(async (apiResolve, apiReject) => {
    try {
      const charactersPromise = new Promise<Character[]>((resolve, reject) => {
        docClient.scan(
          {
            TableName: "mahabharat-characters",
          },
          (err, data) => {
            if (err) {
              console.log("error occurred", err.message);
              reject(err);
            } else if (data && data.Items) {
              console.log("Query succeeded.", data.Items);
              resolve(data.Items as Character[]);
            } else {
              console.error("Unknown error");
              reject({
                message: `Unknown error`,
              });
            }
          }
        );
      });

      const relationshipsPromise = new Promise<Relationship[]>(
        async (resolve, reject) => {
          docClient.scan(
            {
              TableName: "mahabharat-relationship",
            },
            (err, data) => {
              if (err) {
                console.log("error occurred", err.message);
                reject(err);
              } else if (data && data.Items) {
                console.log("Query succeeded.", data.Items);
                resolve(data.Items as Relationship[]);
              } else {
                console.error("Unknown error");
                reject({
                  message: `Unknown error`,
                });
              }
            }
          );
        }
      );

      const characters = await charactersPromise;
      const relationships = await relationshipsPromise;

      apiResolve({
        statusCode: 200,
        body: JSON.stringify({
          characters,
          relationships,
        }),
      });
    } catch (e) {
      apiReject({
        statusCode: 500,
        body: e.message,
      });
    }
  });
};
