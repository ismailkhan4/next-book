import { createAction, props } from '@ngrx/store';
import { Books } from './books';
 
export const invokeBooksAPI = createAction(
  '[Define API] Invoke Define Fetch API'
);
 
export const booksFetchAPISuccess = createAction(
  '[Define API] Fetch API Success',
  props<{ define: Books[] }>()
);