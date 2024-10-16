import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shadowPropsTS } from "./types";

// Si on ne veut pas faire d'export du fichier ShadowsTypes.ts
// type shadowPropsReducer = {
//   id: number | string;
//   active: boolean;
//   inset: boolean;
//   inputs: InputProps[];
// };

// type InputProps = {
//   inputNumber: number;
//   name: string;
//   value: number | string;
//   type: string;
//   minMax?: [number, number];
// };

const initialState: shadowPropsTS[] = [
  {
    id: crypto.randomUUID(),
    active: true,
    inset: false,
    inputs: [
      {
        inputNumber: 1,
        name: "Horizontal offset",
        value: 0,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 2,
        name: "Vertical offset",
        value: 10,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 3,
        name: "Blur radius",
        value: 15,
        type: "range",
        minMax: [0, 250],
      },
      {
        inputNumber: 4,
        name: "Spread radius",
        value: -3,
        type: "range",
        minMax: [-250, 250],
      },
      {
        inputNumber: 5,
        name: "Color ",
        value: "#4f4f4f",
        type: "color",
      },
    ],
  },
];

export const shadowSlice = createSlice({
  name: "shadows",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      return state.filter((el) => el.id !== action.payload);
    },

    // je supprime "action" pour dire à TS que je n'attends pas de payload
    addShadow: (state) => {
      state.push({
        id: crypto.randomUUID(),
        active: true,
        inset: false,
        inputs: [
          {
            inputNumber: 1,
            name: "Horizontal offset",
            value: 0,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 2,
            name: "Vertical offset",
            value: 10,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 3,
            name: "Blur radius",
            value: 15,
            type: "range",
            minMax: [0, 250],
          },
          {
            inputNumber: 4,
            name: "Spread offset",
            value: -3,
            type: "range",
            minMax: [-250, 250],
          },
          {
            inputNumber: 5,
            name: "Color",
            value: "#4f4f4f",
            type: "color",
          },
        ],
      });
    },

    // updateShadowValue
    // updateShadowValue
    // updateShadowValue version stricte avec erreurs console
    updateShadowValue: (state, action) => {
      // Trouver le bon objet dans le tableau
      const shadowToUpdate = state.find(
        (shadow) => shadow.id === action.payload.id
      );

      // Vérifier si shadowToUpdate est défini
      if (shadowToUpdate) {
        // Trouver l'input correspondant
        const currentInput = shadowToUpdate.inputs.find(
          (input) => input.inputNumber === action.payload.inputNumber
        );

        // Vérifier si currentInput est défini
        if (currentInput) {
          // Changer la valeur
          currentInput.value = action.payload.value;
        } else {
          console.error(
            "Input non trouvé avec inputNumber:",
            action.payload.inputNumber
          );
        }
      } else {
        console.error("Shadow non trouvé avec id:", action.payload.id);
      }
    },

    // update Checkbox
    // update Checkbox
    // update Checkbox
    updateCheckbox: (
      state,
      action: PayloadAction<{
        id: number | string;
        name: "active" | "inset";
      }>
    ) => {
      // trouver la bonne shadow dans la liste des shadows (1 au début mais on peut en ajouter)
      const shadowToUpdate = state.find(
        (shadow) => shadow.id === action.payload.id
      );

      if (shadowToUpdate) {
        // Mettre à jour la propriété correspondante (active ou inset)
        shadowToUpdate[action.payload.name] =
          !shadowToUpdate[action.payload.name];
      }
    },
  },
});

export const { removeShadow, addShadow, updateShadowValue, updateCheckbox } =
  shadowSlice.actions;
export default shadowSlice.reducer;
