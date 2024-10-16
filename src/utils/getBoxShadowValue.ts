type ShadowInput = {
  type: "range" | "color";
  value: string | number; // 'value' peut être une chaîne ou un nombre selon le type
};

type kaka = {
  active: boolean;
  inputs: ShadowInput[];
  inset?: boolean; // 'inset' est optionnel
};

const getBoxShadowValue = (shadows: kaka[]): string => {
  let finalString = "";

  shadows.forEach((shadow) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === "range") finalString += `${input.value}px `;
        else if (input.type === "color") finalString += `${input.value}`;
      });

      if (shadow.inset) finalString += " inset";

      if (shadows.indexOf(shadow) === shadows.length - 1) finalString += ";";
      else finalString += ",";
    }
  });

  return finalString;
};

export default getBoxShadowValue;
