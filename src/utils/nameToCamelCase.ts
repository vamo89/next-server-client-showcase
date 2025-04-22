export const nameToCamelCase = (name: string) => {
  const [firstLetter, ...rest] = name.split("");
  return [firstLetter.toUpperCase(), ...rest].join("");
};
