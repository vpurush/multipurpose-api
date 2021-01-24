// import AWS from "aws-sdk";
// import {
//   APIGatewayProxyEvent,
//   Context,
//   APIGatewayProxyResult,
// } from "aws-lambda";
// import { readFile } from "fs";
import { Characters } from "../data/mahabharat/characters";
import { RelationShips } from "../data/mahabharat/relationship";

// const docClient = new AWS.DynamoDB.DocumentClient();

type ValErr = {
  message: string;
};

const characterExists = (character: string): boolean => {
  return Characters.some((c) => c.name === character);
};

export const validateData = (): ValErr[] => {
  const validationErrors: ValErr[] = [];

  RelationShips.forEach((relationship) => {
    if (!characterExists(relationship.fromCharacter)) {
      validationErrors.push({
        message: `${relationship.fromCharacter} does not exist`,
      });
    }

    if (!characterExists(relationship.toCharacter)) {
      validationErrors.push({
        message: `${relationship.toCharacter} does not exist`,
      });
    }
  });

  Characters.forEach((character) => {
    const hasMany =
      Characters.filter((c) => c.name === character.name).length > 1;

    if (hasMany) {
      validationErrors.push({
        message: `Duplicate character entry found for ${character.name}`,
      });
    }
  });

  return validationErrors;
};

// export const LoadData = (
//   event: APIGatewayProxyEvent,
//   context: Context
// ): Promise<APIGatewayProxyResult> => {
//   console.log("start");

//   return new Promise((resolve, reject) => {
//     const validationErrors = validateData();
//     if (validationErrors && validationErrors.length) {
//       resolve({
//         statusCode: 500,
//         body: JSON.stringify(validationErrors),
//       });
//     }
//     console.log("data", Characters);
//     const dbOperations = Characters.map((character) => {
//       return new Promise((innerResolve, innerReject) => {
//         docClient.update(
//           {
//             TableName: "mahabharat-characters",
//             Key: {
//               name: character.name,
//               displayName: character.displayName,
//             },
//             UpdateExpression:
//               "set descriptions=:descriptions, otherNames=:otherNames",
//             ExpressionAttributeValues: {
//               ":descriptions": character.descriptions,
//               ":otherNames": character.otherNames,
//             },
//           },
//           (err, data) => {
//             if (err) {
//               innerReject(err);
//             } else {
//               console.log("inner resolve", data);
//               innerResolve("");
//             }
//           }
//         );
//       });
//     });
//     Promise.all(dbOperations)
//       .then(() => {
//         resolve({
//           statusCode: 200,
//           body: "Data inserted successfully",
//         });
//       })
//       .catch((e) => {
//         reject({
//           statusCode: 500,
//           body: e.message,
//         });
//       });
//   });
// };
