import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, selectBtn } from '../redux/actions';

export default function Filter() {
  const dispatch = useDispatch();
  function clickFilter(e) {
    dispatch(selectFilter(e.target.textContent));
    dispatch(selectBtn(e.target.textContent))
  }
  const button = useSelector(state => state.button);

  return(
    <section className="filter">
      {button.map(btn => (
      <button 
      onClick={clickFilter} 
      key={btn.name} 
      style={btn.status ? {backgroundColor: 'tomato', color: '#fff'} : null}>{btn.name}</button>))}
    </section>
  )
}