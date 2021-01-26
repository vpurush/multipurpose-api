import {
  APIGatewayProxyEvent,
  Context,
  APIGatewayProxyResult,
  Callback,
  Handler,
} from "aws-lambda";
import { Characters } from "../data/mahabharat/characters";
import { Relationships } from "../data/mahabharat/relationship";
import { validateData } from "./loadData";

const validationErrors = validateData();

export const GetCharacterMap = (
  event: APIGatewayProxyEvent,
  context: Context,
  callback: Callback<APIGatewayProxyResult>
): void | Promise<APIGatewayProxyResult> => {
  console.log("GetCharacterMap start");
  try {
    if (validationErrors.length > 0) {
      console.log("GetCharacterMap: there were validation errors");
      const errorMessage = `There were validation errors: ${validationErrors
        .map((v) => v.message)
        .join("\n")}`;

      callback(JSON.stringify(errorMessage));
      return;
    }
    console.log("GetCharacterMap: there were no validation errors");

    callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        characters: Characters,
        relationships: Relationships,
      }),
    });
    console.log("GetCharacterMap end");
  } catch (e) {
    callback(new Error(e.message), {
      statusCode: 500,
      body: e.message,
    });
    console.log(`GetCharacterMap: unknown error occurred ${e.message}`);
  }
};
