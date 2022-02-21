import Add from './Add';

export default function Header({data, func}) {
  return(
    <header>
      <h1>
        <span className="material-icons-outlined">
          fitbit
        </span>
        To do List
      </h1>
      <Add data={data} func={func} />
    </header>
  )
}