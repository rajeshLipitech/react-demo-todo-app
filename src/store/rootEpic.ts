import { combineEpics } from "redux-observable";
import { catchError } from "rxjs/operators";
import * as testimonialEpic from "./../epics/testimonialEpic";

export const combineEpicsAndCatchErrors = (...epics: any[]) => (
  action$: any,
  state$: any,
  deps: any
) => {
  epics = epics.map((epic) => (action$: any, state$: any, deps: any) =>
    epic(action$, state$, deps).pipe(
      catchError((e, source) => {
        console.error("ERROR", e);
        return source;
      })
    )
  );
  return combineEpics(...epics)(action$, state$, deps);
};

const epics = combineEpicsAndCatchErrors(...Object.values(testimonialEpic));

export default epics;
