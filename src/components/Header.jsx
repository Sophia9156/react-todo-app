import { useNavigate } from 'react-router-dom';
import Add from './Add';

export default function Header({authService}) {
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
    navigate('/');
  }

  return(
    <header>
      <h1>
        <span className="material-icons-outlined">
          fitbit
        </span>
        To do List
      </h1>
      <button className='logout' onClick={onLogout}>Logout</button>
      <Add />
    </header>
  )
}