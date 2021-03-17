import { ActionType } from "typesafe-actions";
import * as todoAction from "./actions";

export interface todoState {
  allIds: number[];
  byIds: {
    [key: number]: {
      content: string;
      completed: boolean;
    };
  };
}

export type todoActionTypes = ActionType<typeof todoAction>;
