import { useState } from 'react';

export default function Filter({onSelect}) {
  let btnStatus = [
    {name: 'All', status: true},
    {name: 'Done', status: false},
    {name: 'Unfulfilled', status: false},
  ]
  const [button, setButton] = useState(btnStatus);
  function selectFilter(e) {
    onSelect(e.target.textContent)
    let newBtn = btnStatus.map(item => {
      if(item.name === e.target.textContent) {
        return(
          {...item, status: true}
        )
      }else{
        return(
          {...item, status: false}
        )
      }
    })
    setButton(newBtn);
  }

  return(
    <section className="filter">
      {button.map(btn => (<button onClick={selectFilter} key={btn.name} style={btn.status ? {backgroundColor: 'tomato', color: '#fff'} : null}>{btn.name}</button>))}
    </section>
  )
}