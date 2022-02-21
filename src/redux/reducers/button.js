import {SELECT_BTN} from '../actions';

const initial = [
  {name: 'All', status: true},
  {name: 'Done', status: false},
  {name: 'Unfulfilled', status: false},
]

export default function button(previousState = initial, action) {
  switch(action.type){
    case SELECT_BTN:
      return previousState.map(item => {
        if(item.name === action.text) {
          return(
            {...item, status: true}
          )
        }else{
          return(
            {...item, status: false}
          )
        }
      })
    default: return previousState;
  }
}