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

export interface testimonialState {
  loading: boolean;
  data: any;
  error?: any;
}

export type todoActionTypes = ActionType<typeof todoAction>;
