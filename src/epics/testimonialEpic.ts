import { of } from "rxjs";
import { Epic as ReduxObservableEpic } from "redux-observable";
import { map, switchMap, catchError, filter } from "rxjs/operators";
import { isOfType, ActionType } from "typesafe-actions";
import { RootState } from "../store/rootReducer";
import { todoActionTypes } from "../todoList/types";
import {
  fetchTestimonialsError,
  fetchTestimonialsSuccess,
} from "../todoList/actions";
import { ajax } from "rxjs/ajax";
import { FETCH_TESTIMONIALS } from "../todoList/constants";

export type RootAction = todoActionTypes;

export type Epic<T extends RootAction> = ReduxObservableEpic<
  RootAction,
  T,
  RootState
>;

export const testimonialEpic: Epic<
  | ActionType<typeof fetchTestimonialsSuccess>
  | ActionType<typeof fetchTestimonialsError>
> = (action$, _$) =>
  action$.pipe(
    filter(isOfType(FETCH_TESTIMONIALS)),
    switchMap(() => {
      console.log("fetch data");
      return ajax({
        method: "GET",
        url:
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita",
      }).pipe(
        map(({ response, xhr }) => {
          return fetchTestimonialsSuccess(response);
        }),
        catchError((err: any) => of(fetchTestimonialsError(err)))
      );
    })
  );
