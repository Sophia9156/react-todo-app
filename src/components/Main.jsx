import List from './List';
import Filter from './Filter';

export default function Main({userId, database}) {
  return(
    <main>
      <Filter />
      <List userId={userId} database={database} />
    </main>
  )
}