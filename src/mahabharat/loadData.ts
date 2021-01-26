import { Characters } from "../data/mahabharat/characters";
import { Relationships } from "../data/mahabharat/relationship";

type ValErr = {
  message: string;
};

const characterExists = (character: string): boolean => {
  return Characters.some((c) => c.name === character);
};

export const validateData = (): ValErr[] => {
  const validationErrors: ValErr[] = [];

  Relationships.forEach((relationship) => {
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
