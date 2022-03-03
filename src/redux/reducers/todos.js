import {READ_TODO, ADD_TODO, DELETE_TODO, COMPLETE_TODO, SELECT_FILTER} from '../actions';

const initial = [];

export default function todos(previousState = initial, action) {
  switch(action.type){
    case READ_TODO: 
      if(action.data !== undefined) {
        return Object.values(action.data);
      }
      return [...previousState];
    case ADD_TODO: 
      return [{title: action.text, status: 'Unfulfilled', display: true}, ...previousState];
    case DELETE_TODO:
      return previousState.filter((item) => item.title !== action.todo.title);
    case COMPLETE_TODO:
      return previousState.map((item) => {
        if(item.title === action.todo.title) {
          if(item.status === 'Unfulfilled'){
            return(
              {...item, status: 'Done'}
            )
          }else{
            return(
              {...item, status: 'Unfulfilled'}
            )
          }
        }
        return item;
      });
    case SELECT_FILTER:
      if(action.button === 'Done'){
        return previousState.map(item => {
          if(item.status === 'Unfulfilled') {
            return(
              {...item, display: false}
            )
          }else{
            return(
              {...item, display: true}
            )
          }
        })
      }else if(action.button === 'Unfulfilled'){
        return previousState.map(item => {
          if(item.status === 'Done') {
            return(
              {...item, display: false}
            )
          }else{
            return(
              {...item, display: true}
            )
          }
        })
      }else{
        return previousState.map(item => {
          return(
            {...item, display: true}
          )
        })
      }
    default: return previousState;
  }
}