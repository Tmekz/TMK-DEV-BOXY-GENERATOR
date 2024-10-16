// shadowTypes.ts
export type shadowInputPropsTS = {
  inputNumber: number;
  name: string;
  value: number | string;
  type: "range" | "color"; // Restriction du type ici
  minMax?: [number, number];
};

export type shadowPropsTS = {
  id: number | string;
  active: boolean;
  inset: boolean;
  inputs: shadowInputPropsTS[];
};

// boxProperties Types TS
export type boxPropertiesPropsTS = {
  inputNumber: number;
  name: string;
  value: string | number;
  type: "range" | "color";
  minMax?: [number, number];
  slice?: string;
};
